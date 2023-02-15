import { useEffect } from "react";
import { selectAuthModal } from "@/redux/selectors";
import { closeAuthModal } from "@/redux/slices/modal";
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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AuthInputs from "./AuthInputs";
import OAuthButton from "./OAuthButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/initializeUI";
import ResetPassword from "./ResetPassword";

const AuthModal = () => {
  const [user, loading, error] = useAuthState(auth);
  const authModal = useSelector(selectAuthModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeAuthModal());
  };

  useEffect(() => {
    if (user) handleCloseModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <Modal isOpen={authModal.open} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            {authModal.view === "login" && "Login"}
            {authModal.view === "signup" && "Sign Up"}
            {authModal.view === "reset password" && "Reset Password"}
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
              {authModal.view === "reset password" ? (
                <ResetPassword />
              ) : (
                <OAuthButton />
              )}
              <AuthInputs />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
