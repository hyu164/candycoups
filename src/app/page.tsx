import Link from 'next/link'
import './globals.css'

export default function Home() {
  return (
    <div
      className="min-h-screen text-white p-20 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/backgroud.JPG')" }}
    >
      <header className="flex flex-col items-center mb-10 pt-8">
      <h1 className="text-2xl sm:text-3xl font-serif text-pink-100 leading-tight drop-shadow-md whitespace-nowrap">
       這是我寫給周不要再花錢賭博
      </h1>
     <p className="text-base sm:text-lg font-serif text-pink-50 pt-3 drop-shadow-md">
       我叫他candycoups
    </p>
</header>

      <main className="flex justify-center mt-8 z-10 relative">
        <Link href="/list">
          <button className="font-serif bg-pink-300 text-white px-6 py-3 
            rounded-lg shadow-lg hover:bg-pink-400 transition w-full">
            賭博啦～
          </button>
        </Link>
      </main>
    </div>
  )
}
