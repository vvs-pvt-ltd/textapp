import React from "react";
import { useSelector } from "react-redux";
import LoggedInUserHomepage from "./loggedin";
import LoggedoutUserHomepage from "./loggedout";

const Index = () => {
  const user = useSelector((state) => state.user);
  if (!user.autheticated) return <LoggedoutUserHomepage />;
  return <LoggedInUserHomepage />;
};

export default Index;
