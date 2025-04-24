import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cardsDir = path.join(process.cwd(), 'public/mini12 you')
  try {
    const files = fs.readdirSync(cardsDir)
    const cards = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => `/mini12 you/${file}`)
    res.status(200).json({ cards })
  } catch {
    res.status(500).json({ error: '無法讀取卡片目錄' })
  }
}
