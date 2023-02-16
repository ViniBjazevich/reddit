import { useSelector } from "react-redux";
import AuthButtons from "./AuthButtons";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/initializeUI";
import { Button, Flex } from "@chakra-ui/react";
import { selectUser } from "@/redux/selectors";

const RightContent = () => {
  const user = useSelector(selectUser);
  const [signOut, loading, error] = useSignOut(auth);

  return (
    <>
      <Flex justify={"center"} align={"center"}>
        {!user && <AuthButtons />}
        {user && <Button onClick={signOut}>Log Out</Button>}
      </Flex>
    </>
  );
};

export default RightContent;
