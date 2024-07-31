import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function NavbarTop() {
  return (
    <div className=" fixed bottom-0 px-10 py-2  bg-[#111] w-full text-white  z-50">
      <div className="flex justify-between pb-3">
        <div className="block gap-2 text-center">
          <div className="text-xl">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto mx-auto">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                ></path>{" "}
                <path d="M15 18H9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>{" "}
              </g>
            </svg>
          </div>
          <div className="text-sm ">Home</div>
        </div>
        <div className="block gap-2 text-center opacity-50">
          <div className="text-xl">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto mx-auto">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10.1992 12C12.9606 12 15.1992 9.76142 15.1992 7C15.1992 4.23858 12.9606 2 10.1992 2C7.43779 2 5.19922 4.23858 5.19922 7C5.19922 9.76142 7.43779 12 10.1992 12Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path d="M1 22C1.57038 20.0332 2.74795 18.2971 4.36438 17.0399C5.98081 15.7827 7.95335 15.0687 10 15C14.12 15 17.63 17.91 19 22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                <path
                  d="M17.8205 4.44006C18.5822 4.83059 19.1986 5.45518 19.579 6.22205C19.9594 6.98891 20.0838 7.85753 19.9338 8.70032C19.7838 9.5431 19.3674 10.3155 18.7458 10.9041C18.1243 11.4926 17.3302 11.8662 16.4805 11.97"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path d="M17.3203 14.5701C18.6543 14.91 19.8779 15.5883 20.8729 16.5396C21.868 17.4908 22.6007 18.6827 23.0003 20" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
              </g>
            </svg>
          </div>
          <div className="text-sm">Referral</div>
        </div>
        <div className="block gap-2 text-center opacity-50">
          <div className="text-xl">
            <svg fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto mx-auto">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M16,17a1,1,0,0,0,1-1V6.45a1,1,0,1,0-2,0V15H11.91a1,1,0,0,0,0,2Z"></path>{" "}
                <path d="M16,0A16.06,16.06,0,0,0,2,8.27V6.45a1,1,0,0,0-2,0v5.46a1,1,0,0,0,1,1H6.45a1,1,0,0,0,0-2H3A14,14,0,1,1,2,16a1,1,0,0,0-2,0A16,16,0,1,0,16,0Z"></path>{" "}
              </g>
            </svg>
          </div>
          <div className="text-sm">History</div>
        </div>
      </div>
    </div>
  );
}
