import { Flex } from "@chakra-ui/layout";
import React from "react";
import AuthButtons from "./AuthButtons";

type Props = {};

const RightContent = (props: Props) => {
  return (
    <>
      <Flex justify={"center"} align={"center"}>
        <AuthButtons />
      </Flex>
    </>
  );
};

export default RightContent;