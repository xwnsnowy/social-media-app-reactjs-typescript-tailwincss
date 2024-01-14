import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const isAuthenticated = false;

  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <div className="flex min-h-screen">
      <main className="">{children}</main>
    </div>
  );
};

export default AuthLayout;
