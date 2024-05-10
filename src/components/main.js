import React from "react";
import Footer from "./footer";

const Main = ({ children }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="md:max-w-lg w-full">{children}</div>
    </div>
  );
};

export default Main;
