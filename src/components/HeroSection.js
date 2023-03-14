import React from "react";

const HeroSection = () => {
  return (
    <div className="px-6 md:px-12">
      <div className="px-8 md:flex md:justify-around items-center pt-12 pb-[100px] bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbSUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-no-repeat bg-cover space-y-6 md:space-y-0">
        <div className="text-[20px] sm:text-[30px] text-white space-y-4">
          <h2 className="flex items-center bg-[#bb202e] sm:w-[305px]">
            <span className="bg-[#692238] px-2 py-1">Pursue</span>
            <span
              style={{
                clipPath: "polygon(0 0, 0% 100%, 100% 50%)",
                background: "#692238",
                height: "15px",
                width: "10px",
                display: "block",
              }}
            ></span>
            <span className="px-2">your passion</span>{" "}
          </h2>
          <h2 className="flex items-center bg-[#bb202e]">
            <span className="bg-[#692238] px-2 py-1">Secure</span>
            <span
              style={{
                clipPath: "polygon(0 0, 0% 100%, 100% 50%)",
                background: "#692238",
                height: "15px",
                width: "10px",
                display: "block",
              }}
            ></span>
            <span className="pl-2 pr-4">your peace of mind</span>{" "}
          </h2>
        </div>
        <div className="bg-white px-6 md:w-[350px]">
          <div className="text-center">
            <img
              className="w-[200px] mx-auto"
              src="https://i.ibb.co/9NwPWw6/seattle.png"
              alt=""
            />
            <h2 className="text-[24px] font-bold">Get Convert</h2>
            <p className="text-[18px] leading-none">
              Accept your LRAP award now at no cost to you
            </p>
          </div>
          <div className="py-6 space-y-4">
            <input
              className="w-full border p-2 focus:outline-none"
              type="text"
              placeholder="Student First Name"
            />
            <input
              className="w-full border p-2 focus:outline-none"
              type="text"
              placeholder="Student Last Name"
            />
            <input
              className="w-full border p-2 focus:outline-none"
              type="email"
              placeholder="Student Email Address"
            />
            <div className="flex items-center">
              <input
                style={{ background: "red" }}
                type="checkbox"
                className="w-6 h-6 text-[#bb202e] bg-[#bb202e] border-[#bb202e] rounded  "
              />
              <label className="ml-3 text-sm font-medium text-[#692238] leading-none">
                I confirm that I have receive and accept my LRAP award.
              </label>
            </div>
            <div>
              <button
                className="w-full bg-[#bb202e] text-white py-2 "
                type="button"
              >
                Accept my LRAP award
              </button>
            </div>
            <div>
              <p>
                Lo-fi artisan yr, sriracha marfa listicle next level waistcoat
                literally snackwave paleo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
