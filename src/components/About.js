import React from "react";
import { BsShield } from "react-icons/bs";

const About = () => {
  return (
    <div className="lg:w-[700px] mx-auto px-6 lg:px-0 pb-6 -mt-12">
      <div>
        <div className="flex items-center gap-x-6 px-4 py-2 bg-[#692438] text-white">
          <div className="p-3">
            <BsShield
              className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
              color="white"
            />
          </div>
          <p>
            Farm-to-table selfies lyft portland keffiyeh next level. Mumblecore
            fit skateboard bodega boys forage sriracha praxis retro offal
            gluten-free affogato XOXO Brooklyn 8-bit twee.
          </p>
        </div>
        <div className="flex items-center gap-x-6 px-2 text-[#692438] border border-[#692438]">
          <h2 className="text-[20px] md:text-[24px] font-bold py-2">$46000</h2>
          <p className="border-l border-[#692438] p-2">
            Put a bird on it slow-carb scenester man bun. Asymmetrical jean
            shorts bodega boys single-origin coffee kickstarter shoreditch.
          </p>
        </div>
      </div>
      <div className="py-4 space-y-4">
        <div>
          <h2 className="text-[24px] text-[#692438] font-bold">How it works</h2>
          <p className="font-bold">
            Cronut aesthetic shabby chic cardigan, palo santo gochujang venmo
            lo-fi. Lo-fi thundercats gentrify, photo booth succulents la croix 3
            wolf moon bruh.
          </p>
        </div>
        <div>
          <h2 className="text-[24px] text-[#692438] font-bold">
            Put a bird on it
          </h2>
          <p className="font-bold">
            Farm-to-table selfies lyft portland keffiyeh next level. Mumblecore
            fit skateboard bodega boys forage sriracha praxis retro offal
            gluten-free affogato XOXO Brooklyn 8-bit twee.
          </p>
        </div>
        <div>
          <h2 className="text-[24px] text-[#692438] font-bold">
            Slow-carb scenester
          </h2>
          <p className="font-bold">
            Marxism blue bottle vexillologist meh, chillwave literally roof
            party stumptown neutral milk hotel four loko. Jawn hexagon
            humblebrag locavore pop-up hell of godard gochujang drinking vinegar
            solarpunk adaptogen kickstarter man bun.
          </p>
        </div>
        <div>
          <p className="font-bold">
            Note: This is summery. Hella godard salvia, mustache taxidermy YOLO
            af forage narwhal tumeric unicorn scenester ramps hexagon cupping.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
