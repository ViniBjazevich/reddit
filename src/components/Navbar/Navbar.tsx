import { selectUser } from "@/redux/selectors";
import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";
import CommunityDropdown from "./CommunityDropdown/CommunityDropdown";
import RightContent from "./RightContent/RightContent";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const user = useSelector(selectUser);

  return (
    <Flex
      bg={"white"}
      height={"44px"}
      padding={"6px 12px"}
      justify={"space-between"}
    >
      <Flex align={"center"}>
        <Image src="/images/redditFace.svg" height={"30px"} alt="reddit text" />
        <Image
          src="/images/redditText.svg"
          height={"46px"}
          display={{ base: "none", md: "unset" }}
          alt="reddit logo"
        />
      </Flex>
      {user && <CommunityDropdown />}
      <SearchBar />
      <RightContent />
    </Flex>
  );
};

export default Navbar;
