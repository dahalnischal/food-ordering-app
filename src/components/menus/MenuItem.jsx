import Image from "next/image";
export default function MenuItem() {
  return (
    <div className="text-center flex-col items-center bg-gray-300 rounded-xl px-8 py-5 cursor-pointer  hover:bg-slate-50 shadow-sm transition-all  ease-in-out">
      <Image
        src={"/pizza.png"}
        alt="Menu"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="text-primary font-semibold my-2 text-2xl">
        Pepeproni Pizza
      </h3>
      <p className="text-black text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit a
        magnam temporibus.
      </p>
      <button className="bg-primary rounded-xl text-white py-3 px-8 mt-4">
        Add to cart $12
      </button>
    </div>
  );
}
