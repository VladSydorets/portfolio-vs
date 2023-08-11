import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container w-full flex flex-col justify-start h-screen">
      <Hero />
    </main>
  );
}
