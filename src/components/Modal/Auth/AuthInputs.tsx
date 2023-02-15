import { selectAuthModal } from "@/redux/selectors";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import SignUp from "./SignUp";

const AuthInputs = () => {
  const { view } = useSelector(selectAuthModal);

  return (
    <Flex direction={"column"} align={"center"} width={"100%"} mt={4}>
      {view === "login" && <Login />}
      {view === "signup" && <SignUp />}
    </Flex>
  );
};

export default AuthInputs;
