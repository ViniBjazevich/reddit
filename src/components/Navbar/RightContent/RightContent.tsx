import { useSelector } from "react-redux";
import AuthButtons from "./AuthButtons";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/initializeUI";
import { Button, Flex } from "@chakra-ui/react";
import { selectUser } from "@/redux/selectors";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

const RightContent = () => {
  const user = useSelector(selectUser);
  const [signOut, loading, error] = useSignOut(auth);

  return (
    <>
      <Flex justify={"center"} align={"center"}>
        {user ? <Icons /> : <AuthButtons />}

        {/* {user && <Button onClick={signOut}>Log Out</Button>} */}
        <UserMenu />
      </Flex>
    </>
  );
};

export default RightContent;
