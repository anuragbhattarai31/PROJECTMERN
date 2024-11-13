import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
  } from "@clerk/clerk-react";
  import { Navigate } from "react-router-dom";
  
  export const Auth = () => {
    return (
      <div className="sign-in-container">
        <SignedOut>
          <h1> Welcome to Your Own Personal Finance Tracker!</h1>
          <div className = "button-container">
          <SignUpButton mode="modal" />
          <SignInButton mode="modal" />
          </div>
        </SignedOut>
        <SignedIn>
          <Navigate to="/" />
        </SignedIn>
      </div>
    );
  };