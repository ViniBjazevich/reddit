import { selectUser } from "@/redux/selectors";
import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import AuthModal from "../Modal/Auth/AuthModal";
import RightContent from "./RightContent/RightContent";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Flex bg={"white"} height={"44px"} padding={"6px 12px"}>
      <Flex align={"center"}>
        <Image src="/images/redditFace.svg" height={"30px"} alt="reddit text" />
        <Image
          src="/images/redditText.svg"
          height={"46px"}
          display={{ base: "none", md: "unset" }}
          alt="reddit logo"
        />
      </Flex>
      <SearchBar />
      <AuthModal />
      <RightContent/>
    </Flex>
  );
};

export default Navbar;
