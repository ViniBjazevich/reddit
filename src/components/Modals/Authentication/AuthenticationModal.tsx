import { useEffect } from "react";
import { selectAuthenticationModal, selectUser } from "@/redux/selectors";
import { closeAuthenticationModal } from "@/redux/slices/modal";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/modal";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OAuthButton from "./OAuthButton";
import ResetPassword from "./ResetPassword";
import Login from "./Login";
import SignUp from "./SignUp";

const AuthenticationModal = () => {
  const user = useSelector(selectUser);
  const { open, view } = useSelector(selectAuthenticationModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeAuthenticationModal());
  };

  useEffect(() => {
    if (user) handleCloseModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <Modal isOpen={open} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            {view === "login" && "Login"}
            {view === "signup" && "Sign Up"}
            {view === "reset password" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            pb={6}
          >
            <Flex
              flexDirection={"column"}
              align={"center"}
              justify={"center"}
              width={"70%"}
            >
              {view === "reset password" ? <ResetPassword /> : <OAuthButton />}
              <Flex direction={"column"} align={"center"} width={"100%"} mt={4}>
                {view === "login" && <Login />}
                {view === "signup" && <SignUp />}
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthenticationModal;
