import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div
    className="min-h-screen text-white p-4 md:p-20 relative bg-cover bg-center"
    style={{ backgroundImage: "url('/images/backgroud.JPG')" }}
  >
     <div className="absolute top-4 left-4 z-50">
        <Link href="/">
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow transition text-sm md:text-base">
            ← Back
          </button>
        </Link>
      </div>
     <main className="flex flex-col items-center ">
        <Link href="/card">
          <button className="hover:opacity-80">
            <Image
              src="/album/loveletter-1.jpeg"
              alt="Button Icon"
              width={300}
              height={100}
              className="object-cover"
            />
          </button>
        </Link>
        <Link href="/card2">
          <button className="hover:opacity-80 pt-3">
            <Image
              src="/album/mini12.jpg"
              alt="Button Icon"
              width={300}
              height={100}
              className="object-cover"
            />
          </button>
        </Link>
      </main>
  </div>
)
}
