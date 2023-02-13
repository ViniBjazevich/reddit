import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import SearchBar from "./SearchBar";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Flex bg={"white"} height={"44px"} padding={"6px 12px"}>
      <Flex align={"center"}>
        <Image src="/images/redditFace.svg" height={"30px"} />
        <Image
          src="/images/redditText.svg"
          height={"46px"}
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchBar />
    </Flex>
  );
};

export default Navbar;
