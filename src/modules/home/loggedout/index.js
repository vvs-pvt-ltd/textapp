import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const LoggedoutUserHomepage = () => {
  const [phoneNumber, setphoneNumber] = useState();
  const handleLogin = () => {};
  return (
    <div className="">
      <div>
        <p>Login Account</p>
        <p className="text-muted-foreground text-sm">
          Hey! how you doing? hope great!
        </p>
      </div>

      <div>
        <p>Phone Number</p>
        <Input
          type="number"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setphoneNumber(e.target.value)}
        />
      </div>

      <div>
        <Button onClick={handleLogin} className="w-full">
          Request OTP
        </Button>
      </div>
    </div>
  );
};

export default LoggedoutUserHomepage;
