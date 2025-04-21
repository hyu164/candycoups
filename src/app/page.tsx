import Link from 'next/link'
import Image from 'next/image'
import './globals.css'

export default function Home() {
  return (
    <div
    className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/backgroud.JPG')" }}
    >
      <header className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif text-pink-100 leading-relaxed drop-shadow-md">
         這是我寫給周不要再花錢賭博
        </h1>
        <p className="text-lg sm:text-xl font-serif text-pink-50 drop-shadow-md">
         我叫他candycoups
        </p>
      </header>

      <main className="flex flex-col items-center space-y-6 w-full max-w-xs">
        <Link href="/thoughts">
          <button className="hover:opacity-80 transition">
            <Image
              src="/images/button.png"
              alt="Button Icon"
              width={300}
              height={100}
              className="object-cover rounded-xl"
            />
          </button>
        </Link>

        <Link href="/write">
          <button className="font-serif bg-pink-300 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-400 transition w-full">
            💌 前往寫信頁面
          </button>
        </Link>

        <Link href="/stars">
          <button className="font-serif bg-blue-300 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-400 transition w-full">
            🌠 前往我的宇宙
          </button>
        </Link>
      </main>
    </div>
  )
}
