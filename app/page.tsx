import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <main className="bg-slate-100">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}