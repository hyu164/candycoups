import { useRef, useState, useEffect } from "react";

export default function BackgroundMusic({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 一進頁面隨機播放
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      const duration = audio.duration;
      const randomTime = Math.random() * duration * 0.8;
      audio.currentTime = randomTime;
      audio.play();
      setIsPlaying(true);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    if (audio.readyState >= 1) handleLoadedMetadata();

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [src]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={src} loop style={{ display: "none" }} />
      <button
        onClick={togglePlay}
        className="absolute top-1 right-4 z-50 pt-20 px-40 py-30 text-4xl"
      >
        {isPlaying ? "⏸️" : "▶️"}
      </button>
    </div>
  );
}
