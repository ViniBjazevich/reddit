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
import { auth, firestore } from "@/firebase/initializeUI";
import { FIREBASE_ERRORS, ErrorKeys } from "@/firebase/errors";
import { doc, setDoc } from "firebase/firestore";
import { User } from "firebase/auth";
import { useEffect } from "react";

const OAuthButton = () => {
  const [signInWithGoogle, userCredentials, loading, error] =
    useSignInWithGoogle(auth);

  const addUserDocument = async () => {
    if (userCredentials) {
      const user: User = JSON.parse(JSON.stringify(userCredentials.user));
      const userDocRef = doc(firestore, "users", user.uid);

      // set doc will create a doc if id doesn't exist or update it if it does
      await setDoc(userDocRef, user);
    }
  };

  useEffect(() => {
    addUserDocument();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCredentials]);

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
          <AlertTitle>{FIREBASE_ERRORS[error.message as ErrorKeys]}</AlertTitle>
        </Alert>
      )}
      <Text color={"gray.500"} fontWeight={"700"} mt={4}>
        OR
      </Text>
    </>
  );
};

export default OAuthButton;
