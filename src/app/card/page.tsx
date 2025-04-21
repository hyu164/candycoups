'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CardPage() {
  const [randomCards, setRandomCards] = useState<string[]>([])
  const [allCards, setAllCards] = useState<string[]>([])
  const [isAnimating, setIsAnimating] = useState(false)
  const [showCardPopup, setShowCardPopup] = useState(false)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch('/api/card')
        const { cards } = await response.json()
        setAllCards(cards)
      } catch (error) {
        console.error('無法獲取卡片列表:', error)
      }
    }
    fetchCards()
  }, [])

  const drawTwoRandomCards = () => {
    if (allCards.length < 2 || isAnimating) return

    setIsAnimating(true)
    const cardsCopy = [...allCards]
    const twoRandomCards = []

    const firstIndex = Math.floor(Math.random() * cardsCopy.length)
    twoRandomCards.push(cardsCopy[firstIndex])
    cardsCopy.splice(firstIndex, 1)

    const secondIndex = Math.floor(Math.random() * cardsCopy.length)
    twoRandomCards.push(cardsCopy[secondIndex])

    setRandomCards(twoRandomCards)

    setTimeout(() => {
      setShowCardPopup(true)
      setIsAnimating(false)
    }, 600)
  }

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

      {/* 抽卡按鈕 */}
      <div className="flex justify-center mb-18">
        <button
          onClick={drawTwoRandomCards}
          className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg 
          shadow-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
          disabled={isAnimating}
        >
          {isAnimating ? "抽卡中..." : "按這裡可以抽"}
        </button>
      </div>

      {/* 卡片彈出層 */}
      {showCardPopup && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setShowCardPopup(false)}
        >
          <div
            ref={cardsRef}
            className="flex flex-col md:flex-row gap-4 md:space-x-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 第一張卡 */}
            <div className="relative w-40 h-64 md:w-64 md:h-96 bg-white rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105">
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
            <div className="relative w-40 h-64 md:w-64 md:h-96 bg-white rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105">
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
