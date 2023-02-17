import React from "react";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectCommunityModal } from "@/redux/selectors";
import { useDispatch } from "react-redux";
import { closeCommunityModal } from "@/redux/slices/modal";

const CommunityModal = () => {
  const { open } = useSelector(selectCommunityModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => dispatch(closeCommunityModal());

  return (
    <>
      <Modal isOpen={open} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Community</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            pb={6}
          >
            Body goes here
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommunityModal;
