import React, { useState, useEffect } from "react";
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
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/initializeUI";
import { ErrorKeys, FIREBASE_ERRORS } from "@/firebase/errors";
import { addDoc, collection } from "firebase/firestore";
import { User } from "firebase/auth";

const SignUp = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmation: "",
  });
  const [createUserWithEmailAndPassword, userCredentials, loading, userError] =
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

  const addUserDocument = async () => {
    if (userCredentials) {
      const user: User = JSON.parse(JSON.stringify(userCredentials.user));
      await addDoc(collection(firestore, "users"), user);
    }
  };

  useEffect(() => {
    addUserDocument();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCredentials]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const navigateToLoginPage = () => dispatch(openAuthenticationModal("login"));

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
            {FIREBASE_ERRORS[userError.message as ErrorKeys] ??
              userError.message}
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
