import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="flex min-h-[70vh] items-center justify-center">
        <h1 className="text-4xl font-bold text-[#CCFF00]">
          FITLOG
        </h1>
      </div>
    </main>
  );
}