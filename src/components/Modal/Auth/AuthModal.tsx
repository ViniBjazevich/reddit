import { selectAuthModal } from "@/redux/selectors";
import { toggleAuthModal } from "@/redux/slices/modal";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/modal";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

type Props = {};

const AuthModal = (props: Props) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const authModal = useSelector(selectAuthModal);
  const dispatch = useDispatch();

  const handleModal = () => {
    console.log("Hello");
    dispatch(toggleAuthModal());
  };
  return (
    <>
      <Button onClick={handleModal}>Open Modal</Button>

      <Modal isOpen={authModal.open} onClose={handleModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>This is the modal body</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleModal}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
