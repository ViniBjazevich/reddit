import React from "react";
import { openAuthenticationModal } from "@/redux/slices/modal";
import { Flex, Icon, MenuDivider, MenuItem } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { MdOutlineLogin } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/selectors";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/initializeUI";
import { CgProfile } from "react-icons/cg";

const MenuList = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const UserList = () => (
    <>
      <MenuItem
        fontSize="10pt"
        fontWeight={700}
        _hover={{ bg: "blue.500", color: "white" }}
      >
        <Flex alignItems="center">
          <Icon fontSize={20} mr={2} as={CgProfile} />
          Profile
        </Flex>
      </MenuItem>
      <MenuDivider />
      <MenuItem
        fontSize="10pt"
        fontWeight={700}
        _hover={{ bg: "blue.500", color: "white" }}
        onClick={signOut}
      >
        <Flex alignItems="center">
          <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
          Log Out
        </Flex>
      </MenuItem>
    </>
  );

  const NoUserList = () => (
    <>
      <MenuItem
        fontSize="10pt"
        fontWeight={700}
        _hover={{ bg: "blue.500", color: "white" }}
        onClick={() => dispatch(openAuthenticationModal("login"))}
      >
        <Flex alignItems="center">
          <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
          Log In / Sign Up
        </Flex>
      </MenuItem>
    </>
  );

  return <>{user ? <UserList /> : <NoUserList />}</>;
};

export default MenuList;
