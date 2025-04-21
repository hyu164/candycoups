'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CardPage() {
  const [randomCards, setRandomCards] = useState<string[]>([]) // 改為存放兩張隨機卡片
  const [allCards, setAllCards] = useState<string[]>([]) // 存放所有卡片路徑
  const [isAnimating, setIsAnimating] = useState(false)
  const [showCardPopup, setShowCardPopup] = useState(false) // 控制是否顯示彈出卡片
  const cardsRef = useRef<HTMLDivElement>(null)

  // 從後端 API 獲取所有卡片圖片
  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch('/api/card')
        const { cards } = await response.json()   // 這裡要用 cards
        console.log('取得的卡片清單：', cards)
        setAllCards(cards)
      } catch (error) {
        console.error('無法獲取卡片列表:', error)
      }
    }
    fetchCards()
  }, [])

  // 抽兩張卡邏輯
  const drawTwoRandomCards = () => {
    if (allCards.length < 2 || isAnimating) return

    setIsAnimating(true)
    
    // 創建一個卡片陣列副本，避免重複抽到相同卡片
    const cardsCopy = [...allCards];
    const twoRandomCards = [];
    
    // 抽第一張卡
    const firstIndex = Math.floor(Math.random() * cardsCopy.length);
    twoRandomCards.push(cardsCopy[firstIndex]);
    cardsCopy.splice(firstIndex, 1); // 從副本中移除已抽到的卡
    
    // 抽第二張卡
    const secondIndex = Math.floor(Math.random() * cardsCopy.length);
    twoRandomCards.push(cardsCopy[secondIndex]);
    
    setRandomCards(twoRandomCards);

    // 顯示彈出層
    setTimeout(() => {
      setShowCardPopup(true)
      setIsAnimating(false)
    }, 600) // 與動畫時間一致
  }

  return (
    
    <div className="min-h-screen text-white p-20 relative "style={{ backgroundImage: "url('/images/backgroud.JPG')" }}>
      <div className="absolute top-6 left-110 z-50">
        <Link href="/">
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow transition">
           ← Back
          </button>
        </Link>
      </div>
      {/* 抽卡按鈕 */}
      <div className="flex justify-center mb-10">
        <button 
          onClick={drawTwoRandomCards}
          className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-4 px-8 rounded-lg 
          shadow-lg transition-all duration-300 transform hover:scale-105"
          disabled={isAnimating}
        >
          {isAnimating ? "抽卡中..." : "按這裡可以抽"}
        </button>
      </div>
      
      
      {/* 卡片彈出層 */}
      {showCardPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setShowCardPopup(false)}>
          <div ref={cardsRef} className="flex space-x-4" onClick={(e) => e.stopPropagation()}>
            {/* 第一張卡 */}
            <div className="relative w-64 h-96 md:w-80 md:h-118 bg-white rounded-xl shadow-2xl 
            transform transition-all duration-300 hover:scale-105">
              {randomCards[0] && (
                <Image 
                  src={randomCards[0]} 
                  alt="第一張卡片" 
                  width={320} 
                  height={700} 
                  className="w-full h-full object-cover rounded-xl"
                />
              )}
            </div>
            
            {/* 第二張卡 */}
            <div className="relative w-64 h-96 md:w-80 md:h-118 bg-white rounded-xl shadow-2xl 
            transform transition-all duration-300 hover:scale-105">
              {randomCards[1] && (
                <Image 
                  src={randomCards[1]} 
                  alt="第二張卡片" 
                  width={320} 
                  height={700} 
                  className="w-full h-full object-cover rounded-xl"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
