"use client";
import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { IoCallOutline, IoCall } from "react-icons/io5"; // filled and outline icons
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5"; // filled and outline icons
import { IoChatbubbleOutline, IoChatbubbleSharp } from "react-icons/io5"; // filled and outline icons
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const user = useSelector((state) => state.user);
  const path = usePathname();
  const isIconFilled = (iconPath) => {
    return path === iconPath ? true : false;
  };

  const renderIcon = (route) => {
    const IconComponent = isIconFilled(route.pathName)
      ? route.Icon
      : route.OutlineIcon;
    return (
      <div className="flex flex-col items-center justify-center">
        <IconComponent />
        <p
          className={
            isIconFilled(route.pathName)
              ? "font-medium"
              : "text-muted-foreground text-sm"
          }>
          {route.name}
        </p>
      </div>
    );
  };

  return (
    <footer className="backdrop-blur-sm fixed bottom-0 z-40 w-full">
      <div className="flex items-center justify-center">
        <div className="md:max-w-lg w-full bg-backgroundOpac flex items-center justify-center h-16">
          <div className="w-full items-center justify-center p-0 m-0 grid grid-cols-4">
            {Object.values(routingObj).map((route, index) => (
              <Link
                href={route.pathName}
                key={index}
                className="flex flex-col items-center justify-center">
                {renderIcon(route)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const routingObj = {
  chat: {
    pathName: "/",
    name: "Chat",
    Icon: IoChatbubbleSharp,
    OutlineIcon: IoChatbubbleOutline,
  },
  story: {
    pathName: "/story",
    name: "Story",
    Icon: MdOutlineHistoryToggleOff,
    OutlineIcon: MdOutlineHistoryToggleOff,
  },
  settings: {
    pathName: "/settings",
    name: "Settings",
    Icon: IoSettingsSharp,
    OutlineIcon: IoSettingsOutline,
  },
  call: {
    pathName: "/call",
    name: "Call",
    Icon: IoCall,
    OutlineIcon: IoCallOutline,
  },
};
