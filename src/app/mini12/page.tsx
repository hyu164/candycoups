'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadedMetadata = () => {
      const duration = audio.duration
      // 避免跳到結尾，隨機前80%
      const randomTime = Math.random() * duration * 0.8
      audio.currentTime = randomTime
      audio.play()
      setIsPlaying(true)
    }

    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    // 若已載入（快取情境）
    if (audio.readyState >= 1) handleLoadedMetadata()

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
       <div>
    <audio
      ref={audioRef}
      src="/music/LOVE, MONEY, FAME.mp3"
      loop
      style={{ display: 'none' }}
    />
      <button onClick={togglePlay} className="absolute top-1 right-4 z-50 pt-20 
      px-40 py-30 text-4xl">
        {isPlaying ? "⏸️" : "▶️"}
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <>
    <BackgroundMusic />
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
