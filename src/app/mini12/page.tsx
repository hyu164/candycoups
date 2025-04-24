import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <audio src="/music/LOVE, MONEY, FAME.mp3" autoPlay loop controls style={{ display: 'none' }} />
    <div
    className="min-h-screen text-white p-4 md:p-20 relative bg-cover bg-center"
    style={{ backgroundImage: "url('/images/background-12.jpg')" }}
  >
     <div className="absolute top-4 left-4 z-100">
        <Link href="/">
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow transition text-sm md:text-base">
            ← Back
          </button>
        </Link>
      </div>
      <div className="absolute top-4 left-4 z-50 pt-16">
        <Link href="/list">
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow transition text-sm md:text-base">
            ←  List 
          </button>
        </Link>
      </div>
     <main className="flex flex-col items-center mt-10 ">
        <Link href="/mini12blue">
          <button className="hover:opacity-80">
            <Image
              src="/album/mini12blue.jpg"
              alt="Button Icon"
              width={150}
              height={50}
              className="object-cover"
            />
          </button>
        </Link>
        <Link href="/mini12you">
          <button className="hover:opacity-80 pt-3">
            <Image
              src="/album/mini12you.jpg"
              alt="Button Icon"
              width={150}
              height={50}
              className="object-cover"
            />
          </button>
        </Link>
      </main>
  </div>
  </>
)
}
