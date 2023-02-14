import { Button } from "@chakra-ui/button";
import React from "react";

type Props = {};

const AuthButtons = (props: Props) => {
  return (
    <>
      <Button
        mr={2}
        variant={"outline"}
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
      >
        Log In
      </Button>
      <Button
        mr={2}
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthButtons;
