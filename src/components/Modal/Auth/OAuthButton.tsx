import {
  Alert,
  AlertIcon,
  AlertTitle,
  Flex,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/initializeUI";
import { FIREBASE_ERRORS, ErrorKeys } from "@/firebase/errors";

const OAuthButton = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(user)

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  return (
    <>
      <Flex width={"100%"}>
        <Button
          width={"100%"}
          variant={"outline"}
          isLoading={loading}
          onClick={handleGoogleLogin}
        >
          <Image
            src="/images/googlelogo.png"
            height={"20px"}
            alt="google logo"
            mr={2}
          />
          Continue with Google
        </Button>
      </Flex>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>
            {FIREBASE_ERRORS[error.message as ErrorKeys]}
          </AlertTitle>
        </Alert>
      )}
      <Text color={"gray.500"} fontWeight={"700"} mt={4}>
        OR
      </Text>
    </>
  );
};

export default OAuthButton;
