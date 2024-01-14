import React, { ReactNode } from "react";
import "./GlobalStyles.scss";

interface GlobalStylesProps {
  children: ReactNode;
}

const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
  return children;
};

export default GlobalStyles;
