import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-4">
          Manage homestay information and guest insights.
        </p>
      </main>

      <Footer />
    </>
  );
}