import React, { useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Flex,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { openAuthenticationModal } from "@/redux/slices/modal";
import { useDispatch } from "react-redux";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/initializeUI";
import { FIREBASE_ERRORS, ErrorKeys } from "@/firebase/errors";

const Login = () => {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [signInWithEmailAndPassword, user, loading, userError] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = loginForm;

    signInWithEmailAndPassword(email, password);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const navigateToSignUpPage = () =>
    dispatch(openAuthenticationModal("signup"));

  const navigateToResetPage = () =>
    dispatch(openAuthenticationModal("reset password"));

  return (
    <form onSubmit={handleSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        type={"email"}
        mb={2}
        onChange={handleChange}
      />
      <Input
        required
        name="password"
        placeholder="password"
        type={"password"}
        mb={2}
        onChange={handleChange}
      />
      {userError && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>
            {FIREBASE_ERRORS[userError.message as ErrorKeys]}
          </AlertTitle>
        </Alert>
      )}
      <Button mt={2} height={"36px"} width={"100%"} type="submit">
        Login
      </Button>
      <Flex fontSize={"10pt"} justifyContent={"center"} gap={2} mt={3}>
        <Text>Forgot your password?</Text>
        <Text
          color={"blue.300"}
          fontWeight={"700"}
          cursor={"pointer"}
          onClick={navigateToResetPage}
        >
          Reset
        </Text>
      </Flex>
      <Flex fontSize={"10pt"} justifyContent={"center"} gap={2} mt={2}>
        <Text>New here?</Text>
        <Text
          color={"blue.500"}
          fontWeight={"700"}
          cursor={"pointer"}
          onClick={navigateToSignUpPage}
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};

export default Login;
