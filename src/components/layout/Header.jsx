import React from "react";
import Link from "next/link";
export const Header = () => {
  return (
    <div>
      {" "}
      <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl" href="">
          PizzaHouse
        </Link>
        <nav className="flex items-center gap-8 text-gray-400 font-regular">
          <Link href={"/"}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
          <Link
            href={""}
            className="bg-primary rounded-xl text-white py-3 px-8 "
          >
            Login
          </Link>
        </nav>
      </header>
    </div>
  );
};
