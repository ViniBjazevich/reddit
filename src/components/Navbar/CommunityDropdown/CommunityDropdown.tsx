import React from "react";
import {
  Menu,
  MenuButton,
  Flex,
  MenuList,
  Icon,
  Text,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { TiHome } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { openCommunityModal } from "@/redux/slices/modal";

const CommunityDropdown = () => {
  const dispatch = useDispatch();

  const handleOpenCommunityModal = () => {
    dispatch(openCommunityModal());
  };

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius="4px"
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
        mr={2}
        ml={2}
      >
        <Flex alignItems="center" justify={"space-between"}>
          <Flex alignItems="center">
            <Icon fontSize={24} mr={{ base: 1, md: 2 }} as={TiHome} />
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontWeight={600} fontSize={"10pt"}>
                Home
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon color="gray.500" />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleOpenCommunityModal}>Add Community</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CommunityDropdown;
