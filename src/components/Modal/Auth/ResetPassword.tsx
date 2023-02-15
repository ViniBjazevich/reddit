import { openAuthModal } from "@/redux/slices/modal";
import {
  Flex,
  Text,
  Icon,
  Input,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsReddit, BsDot } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/initializeUI";

type Props = {};

const ResetPassword = (props: Props) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await sendPasswordResetEmail(email);
    setSuccess(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const navigateToSignUpPage = () => dispatch(openAuthModal("signup"));
  const navigateToLoginPage = () => dispatch(openAuthModal("login"));

  return (
    <>
      <Icon as={BsReddit} color="brand.100" fontSize={40} />
      <Flex
        fontSize={"10pt"}
        direction={"column"}
        justifyContent={"center"}
        textAlign={"center"}
        gap={2}
        mt={4}
        mb={4}
      >
        <Text fontWeight={700} fontSize={"12pt"}>
          Reset Your Password
        </Text>
        <Text>
          Enter the email associate with your account and we&apos;ll send you a
          reset link.
        </Text>
      </Flex>
      {success ? (
        <Alert status="success">
          <AlertIcon />
          Password reset email sent successfully.
        </Alert>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
          }}
        >
          <Input
            required
            name="email"
            placeholder="email"
            type={"email"}
            onChange={handleChange}
          />
          <Button mt={4} width={"100%"} type="submit" isLoading={sending}>
            Reset Password
          </Button>
        </form>
      )}
      <Flex
        fontSize={"10pt"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        mt={3}
      >
        <Text
          color={"blue.500"}
          fontWeight={"700"}
          cursor={"pointer"}
          onClick={navigateToLoginPage}
        >
          LOG IN
        </Text>
        <Icon as={BsDot} color="black.100" fontSize={20} />
        <Text
          color={"blue.500"}
          fontWeight={"700"}
          cursor={"pointer"}
          onClick={navigateToSignUpPage}
        >
          SIGN UP
        </Text>
      </Flex>
    </>
  );
};

export default ResetPassword;
