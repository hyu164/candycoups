import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur ">
      <div className="max-w-6xl mx-auto px-8 py-3 flex gap-4">
        <Link
          href="/card2/1"
          className="text-white hover:text-pink-400 transition"
        >
          卡池1
        </Link>
        <Link
          href="/card2/2"
          className="text-white hover:text-pink-400 transition"
        >
          卡池2
        </Link>
        
      </div>
    </nav>
  );
}
