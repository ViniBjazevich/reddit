import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import AuthModal from "../Modal/Auth/AuthModal";
import RightContent from "./RightContent/RightContent";
import SearchBar from "./SearchBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/initializeUI";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

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
      <RightContent user={user} />
    </Flex>
  );
};

export default Navbar;
