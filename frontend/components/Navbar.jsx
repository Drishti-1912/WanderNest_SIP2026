import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">
        WanderNest
      </h1>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}