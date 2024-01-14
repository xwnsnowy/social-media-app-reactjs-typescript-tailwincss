import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import images from "../../assets/images";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const isAuthenticated = false;

  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <>
      <section className="flex flex-1 flex-col items-center justify-center py-10">
        {children}
      </section>

      <img
        src={images.sideImg}
        alt="side-img"
        className="hidden h-screen w-1/2 overflow-hidden bg-no-repeat object-cover xl:block"
      />
    </>
  );
};

export default AuthLayout;
