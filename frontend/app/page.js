import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

        <Card
          title="Mountain Retreat"
          description="Eco-friendly homestay in the hills."
        />

        <Card
          title="Village Food Tour"
          description="Experience local cuisine and culture."
        />

      </div>

      <Footer />
    </>
  );
}