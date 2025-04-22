import Link from 'next/link'

export default function Card2Home() {
  return (
    <div>
     <nav className="fixed top-0 left-0 right-0 bg-black/80 z-[999]">
  <div className="max-w-6xl mx-auto px-8 py-3 flex gap-4">
    <Link href="/card2/1" className="text-white hover:text-pink-400 transition">
      卡池1
    </Link>
    <Link href="/card2/2" className="text-white hover:text-pink-400 transition">
      卡池2
    </Link>
    </div>
  </nav> {/* 只有這裡有 Navbar */}
      <div
      className="min-h-screen text-white p-4 md:p-20 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background-12.jpg')" }}
    >
      <div className="absolute top-4 left-4 z-50 pt-16">
        <Link href="/list">
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 
          rounded-lg shadow transition text-sm md:text-base">
            ←  List 
          </button>
        </Link>
      </div>   
        
      </div>
    </div>
  )
}
