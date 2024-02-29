import React from "react";
import SectionHeader from "@/components/layout/SectionHeader";
import Image from "next/image";
export const About = () => {
  return (
    <section className="pt-20 relative">
      <div className="absolute w-48 h-48 -right-12 -top-20 z-[-1]">
        <Image
          src={"/pizza.png"}
          alt="Salad"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute w-48 h-48 -left-12 top-10 z-[-1]">
        <Image
          src={"/sallad1.png"}
          alt="Salad"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <SectionHeader subHeader={"who we are"} mainHeader={"About Us"} />
      <div className="about-grid gap-8 mt-10 items-center">
        <div className="text-gray-400 text-l flex flex-col gap-4 pl-10">
          <p>
            Located in the heart of New Baneshwor-10, Kathmandu, Nepal, our
            pizzeria is a haven for pizza enthusiasts far and wide. We take
            pride in serving an extensive variety of pizzas, each crafted with
            the utmost care and the finest ingredients. From the timeless
            classics to innovative local and international blends, we ensure
            every slice is a testament to our passion for pizza.
          </p>
          <p>
            Our commitment goes beyond just satisfying your pizza cravings; we
            aim to create a memorable dining experience that reflects the
            vibrant spirit of Kathmandu.
          </p>
          <p>
            Our menu is a carefully curated selection of pizzas, each with its
            own unique twist, ensuring there's something for everyone. Whether
            you're a fan of the robust, spicy notes of a classic pepperoni or
            the subtle, fresh flavors of a veggie delight, our kitchen is
            dedicated to bringing you the best of both worlds.
          </p>
          <p>
            Join us on this flavorful journey, where every pizza tells a story
            of culinary excellence and the joy of sharing.
          </p>
        </div>
        <div className="p-20 border  border-solid border-blue-500 text-center">
          <h1 className="text-6xl font-bold text-primary italic ">
            Pizza House
          </h1>
        </div>
      </div>
    </section>
  );
};
