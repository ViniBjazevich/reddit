/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/initializeUI";
import { useDispatch } from "react-redux";
import { updateAuth } from "@/redux/slices/auth";
import AuthModal from "../Modal/Auth/AuthModal";
import CommunityModal from "../Modal/Community/CommunityModal";

// This file displays all of the content that will always exists on the page (Navbar) and renders the children below

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    let errorMessage: string | null = null;

    if (error) {
      errorMessage = error.message;
    }

    dispatch(updateAuth({ user, loading, errorMessage }));
  }, [user, loading, error]);

  return (
    <>
      <Navbar />
      <AuthModal />
      <CommunityModal />
      <main>{children}</main>
    </>
  );
};

export default Layout;
