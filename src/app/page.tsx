import Link from 'next/link'
import './globals.css'

export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/backgroud.JPG')" }}
    >
      <header className="text-center mb-10 pt-16">
        <h1 className="text-3xl sm:text-4xl font-serif text-pink-100 leading-relaxed drop-shadow-md">
          這是我寫給周不要再花錢賭博
        </h1>
        <p className="text-lg sm:text-2xl font-serif text-pink-50 pt-5 drop-shadow-md">
          我叫他candycoups
        </p>
      </header>

      <main className="flex justify-center mt-8 z-10 relative">
        <Link href="/card">
          <button className="font-serif bg-pink-300 text-white px-6 py-3 
            rounded-lg shadow-lg hover:bg-pink-400 transition w-full">
            賭博啦～
          </button>
        </Link>
      </main>
    </div>
  )
}
