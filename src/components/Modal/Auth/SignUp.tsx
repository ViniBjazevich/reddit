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
import { openAuthModal } from "@/redux/slices/modal";
import { useDispatch } from "react-redux";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/initializeUI";
import { ErrorKeys, FIREBASE_ERRORS } from "@/firebase/errors";

const SignUp = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmation: "",
  });
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password, confirmation } = signUpForm;

    if (error) {
      setError("");
    }

    if (password !== confirmation) {
      setError("Passwords do not match.");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const navigateToLoginPage = () => dispatch(openAuthModal("login"));

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
      <Input
        required
        name="confirmation"
        placeholder="confirm password"
        type={"password"}
        mb={2}
        onChange={handleChange}
      />
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
      {userError && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>
            {FIREBASE_ERRORS[userError.message as ErrorKeys]}
          </AlertTitle>
        </Alert>
      )}
      <Button
        mt={2}
        height={"36px"}
        width={"100%"}
        type="submit"
        isLoading={loading}
      >
        Sign Up
      </Button>
      <Flex fontSize={"10pt"} justifyContent={"center"} gap={2} mt={3}>
        <Text>Already a redditor?</Text>
        <Text
          color={"blue.500"}
          fontWeight={"700"}
          cursor={"pointer"}
          onClick={navigateToLoginPage}
        >
          LOGIN
        </Text>
      </Flex>
    </form>
  );
};

export default SignUp;