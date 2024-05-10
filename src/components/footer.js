"use client";
import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const user = useSelector((state) => state.user);
  // if (!user.authenticated) return <></>;
  return (
    <footer className="backdrop-blur-sm fixed bottom-0 z-40 w-full">
      <div className="flex items-center justify-center">
        <div className="md:max-w-lg bg-backgroundOpac container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          Menu Items
        </div>
      </div>
    </footer>
  );
};

export default Footer;
