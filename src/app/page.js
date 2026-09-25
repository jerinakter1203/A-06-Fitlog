import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Library from "../components/Library";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      <Library />
    </main>
  );
}