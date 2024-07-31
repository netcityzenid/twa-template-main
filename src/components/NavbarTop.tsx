import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function NavbarTop() {
  return (
    <div className="fixed bg-[#111] top-0 px-5 py-4 z-[100] w-full">
      <div className="flex  relative justify-between items-center">
        <div className="text-white">LOGO</div>
        <div>
          <TonConnectButton />
        </div>
      </div>
    </div>
  );
}
