import React, { ReactNode } from "react";
import DefaultHeader from "../components/DefaultHeader";
import DefaultFooter from "../components/DefaultFooter";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <DefaultHeader />
      <main className="">{children}</main>
      <DefaultFooter />
    </div>
  );
};

export default DefaultLayout;
