import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function NavbarTop() {
  return (
    <div className=" top-0 ">
      <div className="flex mb-2 relative justify-between items-center">
        <div>LOGO</div>
        <div>
          <TonConnectButton />
        </div>
      </div>
    </div>
  );
}
