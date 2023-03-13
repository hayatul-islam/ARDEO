import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f2f2f2] mx-12 py-8">
      <h2 className="text-center text-[28px]">As Featured In</h2>
      <div className="grid grid-cols-5 text-center items-center py-4">
        <img
          className="h-[40px] mx-auto"
          src="https://i.ibb.co/gJBZVSS/us.png"
          alt=""
        />
        <img
          className="h-[60px] mx-auto"
          src="https://i.ibb.co/M9QhRfD/cm.png"
          alt=""
        />
        <img
          className="h-[60px] mx-auto"
          src="https://i.ibb.co/KK3C9hD/ws.png"
          alt=""
        />
        <img
          className="h-[50px] mx-auto"
          src="https://i.ibb.co/mCyc2LX/forbase.png"
          alt=""
        />
        <img
          className="h-[50px] mx-auto"
          src="https://i.ibb.co/cvZ3Qy8/fortune.png"
          alt=""
        />
      </div>
      <div className="px-12 py-6 flex gap-x-6">
        <div className="max-w-[400px]">
          <h2 className="text-[20px] font-medium">
            About Adreo Education Solutions
          </h2>
          <p className="text-[18px]">
            Lumbersexual subway tile keffiyeh, humblebrag celiac VHS you
            probably haven't heard.
          </p>
        </div>
        <div>
          <h2 className="text-[20px] font-medium">Contracts Us</h2>
          <address>
            <p>P.O Box 1476</p>
            <p>Dhaka, Bangladesh</p>
            <p>info@gmail.com</p>
          </address>
        </div>
      </div>
      <p className="text-center pt-12 opacity-70">
        © 2023 Hayatul Islam All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
