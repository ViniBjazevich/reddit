import React, { useEffect, ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/initializeUI";
import { useDispatch } from "react-redux";
import { updateUser } from "@/redux/slices/user";

// This file displays all of the content that will always exists on the page (Navbar) and renders the children below

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUser(user));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
