import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Card2Home() {
  return (
    <div>
      <Navbar />  {/* 只有這裡有 Navbar */}
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
