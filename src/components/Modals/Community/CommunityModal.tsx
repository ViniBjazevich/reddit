import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectCommunityModal, selectUser } from "@/redux/selectors";
import { useDispatch } from "react-redux";
import { closeCommunityModal } from "@/redux/slices/modal";
import { BsFillPersonFill, BsFillEyeFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { firestore } from "@/firebase/initializeUI";

const CommunityModal = () => {
  const user = useSelector(selectUser);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [communityType, setCommunityType] = useState("Public");
  const [loading, setLoading] = useState(false);
  const { open } = useSelector(selectCommunityModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => dispatch(closeCommunityModal());

  const handleCommunityNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
      .replace(/[ ]/gi, "-")
      .replace(/[^0-9a-z-]/gi, "");

    if (value.length > 21) return;
    setName(value);
  };

  const handleCreateCommunity = async () => {
    setNameError("");
    
    if (name.length < 3) {
      setNameError("Name must be between 3-21 characters.");
      return;
    }

    setLoading(true);

    try {
      const communityDocRef = doc(firestore, "communities", name);
      const communityDoc = await getDoc(communityDocRef);

      // Check if community exists
      if (communityDoc.exists()) {
        throw new Error(`Sorry, r/${name} is already taken. Try another.`);
      }

      // Create community
      await setDoc(communityDocRef, {
        creatorId: user?.uid,
        createdAt: serverTimestamp(),
        numberOfMembers: 1,
        privacyType: communityType,
      });
    } catch (error: any) {
      console.log(`Error creating community: `, error);
      setNameError(error.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display="flex"
            flexDirection="column"
            fontSize={15}
            padding={3}
          >
            Create a community
          </ModalHeader>
          <Box pr={3} pl={3}>
            <Divider />
            <ModalCloseButton />
            <ModalBody display="flex" flexDirection="column" padding="10px 0px">
              <Text fontWeight={600} fontSize={15}>
                Name
              </Text>
              <Text fontSize={11} mb={2} color="gray.500">
                Community names including capitalization cannot be changed
              </Text>
              <InputGroup>
                <InputLeftAddon>/r</InputLeftAddon>
                <Input
                  onChange={handleCommunityNameChange}
                  placeholder="Community Name"
                  value={name}
                />
              </InputGroup>
              <Text
                fontSize="9pt"
                color={name.length === 21 ? "red" : "gray.500"}
                pt={2}
              >
                {21 - name.length} Characters remaining
              </Text>
              <Text fontSize="9pt" color="red" pt={1}>
                {nameError}
              </Text>
              <Box mt={2} mb={4}>
                <Text fontWeight={600} fontSize={15} mb={2}>
                  Community Type
                </Text>
                <RadioGroup onChange={setCommunityType} value={communityType}>
                  <Stack spacing={4} pt={1}>
                    <Radio value="Public">
                      <Flex alignItems="center" justify={"center"}>
                        <Icon as={BsFillPersonFill} mr={2} color="gray.500" />
                        <Text fontSize="9pt" mr={1}>
                          Public
                        </Text>
                        <Text fontSize="8pt" color="gray.500">
                          Anyone can view, post, and comment to this community
                        </Text>
                      </Flex>
                    </Radio>
                    <Radio value="Restricted">
                      <Flex alignItems="center">
                        <Icon as={BsFillEyeFill} color="gray.500" mr={2} />
                        <Text fontSize="9pt" mr={1}>
                          Restricted
                        </Text>
                        <Text fontSize="8pt" color="gray.500">
                          Anyone can view this community, but only approved
                          users can post
                        </Text>
                      </Flex>
                    </Radio>
                    <Radio value="Private">
                      <Flex alignItems="center">
                        <Icon as={HiLockClosed} color="gray.500" mr={2} />
                        <Text fontSize="9pt" mr={1}>
                          Private
                        </Text>
                        <Text fontSize="8pt" color="gray.500">
                          Only approved users can view and submit to this
                          community
                        </Text>
                      </Flex>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            </ModalBody>
          </Box>
          <ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
            <Button
              variant="outline"
              height="30px"
              mr={2}
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
            <Button
              variant="solid"
              height="30px"
              onClick={handleCreateCommunity}
              isLoading={loading}
            >
              Create Community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommunityModal;
