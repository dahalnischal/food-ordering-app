import Image from "next/image";
import React from "react";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <section className="hero gap-5">
      <div className="py-12 pl-10">
        <h1 className="text-4xl font-semibold ">
          Hot, Fresh, and Flavorful Pizza Delivered to{" "}
          <span className="text-primary">Your Doorstep</span>
        </h1>
        <p className="my-4 text-gray-400 text-sm">
          Welcome to the ultimate pizza experience! Dive into a world where the
          dough is always hand-kneaded, the toppings are fresh off the farm, and
          the flavors are crafted just for you. <br /> <br /> Whether you are
          craving the classic Margherita, the spicy Pepperoni, or feeling
          adventurous with our signature creations, your perfect pizza is just a
          few clicks away. With our user-friendly online ordering system, you
          can customize your pizza, track your order in real-time, and enjoy
          hot, delicious pizza delivered straight to your home. <br /> <br />{" "}
          Why wait? Satisfy your pizza cravings now!
        </p>
        <div className="flex gap-4 items-center mt-6">
          <button className="bg-primary flex items-center gap-2 rounded-xl text-white py-3 px-4">
            Order Now
            <Right />
          </button>
          <button className="flex items-center gap-2 text-gray-400">
            Learn More <Right />
          </button>
        </div>
      </div>
      <div className=" relative ">
        <Image
          src={"/pizza.png"}
          alt="Pizza"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Hero;
