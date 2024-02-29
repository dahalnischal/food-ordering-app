import Image from "next/image";
import React from "react";
import MenuItem from "../menus/MenuItem";
import SectionHeader from "./SectionHeader";

export const HomeMenu = () => {
  return (
    <section className="relative overflow-x-clip pt-20 px-10">
      <div className="absolute w-48 h-48 -left-12 top-10 z-[-1]">
        <Image
          src={"/sallad1.png"}
          alt="Salad"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute w-48 h-48 -right-12 top-10 z-[-1]">
        <Image
          src={"/sallad2.png "}
          alt="Salad"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="text-center">
        <SectionHeader subHeader={"check out"} mainHeader={"Menus"} />
      </div>
      <div className="grid grid-cols-3 gap-4 pt-10">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};
