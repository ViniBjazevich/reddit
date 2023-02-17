import { openAuthenticationModal } from "@/redux/slices/modal";
import { Button } from "@chakra-ui/button";
import React from "react";
import { useDispatch } from "react-redux";

const AuthButtons = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        mr={2}
        variant={"outline"}
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        onClick={() => dispatch(openAuthenticationModal("login"))}
      >
        Log In
      </Button>
      <Button
        mr={2}
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        onClick={() => dispatch(openAuthenticationModal("signup"))}
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthButtons;
