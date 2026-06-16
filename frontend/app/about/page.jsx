import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="p-8">
        <h1 className="text-3xl font-bold">
          About WanderNest
        </h1>

        <p className="mt-4">
          AI-powered travel assistant for rural tourism.
        </p>
      </main>

      <Footer />
    </>
  );
}