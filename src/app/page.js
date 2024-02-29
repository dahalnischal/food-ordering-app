import { About } from "@/components/layout/About";
import { Header } from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import { HomeMenu } from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <About />
      <section className="pt-20">
        <SectionHeader
          subHeader={"connect with us"}
          mainHeader={"Contact Us"}
        />
        <div className="text-center mt-10 flex justify-between px-10">
          <a
            href="tel:+9779815325146"
            className="text-gray-500 text-2xl underline"
          >
            +977-9815325146
          </a>
          <a href="" className="text-gray-500 text-2xl">
            New Baneshwor, Kathmandu ,Nepal
          </a>
        </div>
      </section>
      <footer className=" mt-20 border-t border-solid border-b-slate-900 p-10 pt-4 pb-5 flex justify-between">
        <div>&copy; 2023 All Rights Reserved - PizzaHouse</div>
        <div>
          Designed and Developed by{" "}
          <a href="" title="Nischal Dahal" className="text-primary underline">
            Nischal Dahal
          </a>
        </div>
      </footer>
    </>
  );
}
