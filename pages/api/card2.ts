import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ cards: string[] } | { error: string }>
) {
  const { pool } = req.query

  if (!pool || typeof pool !== 'string') {
    return res.status(400).json({ error: '缺少卡池參數' })
  }

  // 這裡要指向 public/card2/pool-${pool}
  const cardsDir = path.join(process.cwd(), 'public', 'card2', `pool-${pool}`)

  try {
    if (!fs.existsSync(cardsDir)) {
      return res.status(404).json({ error: '卡池不存在' })
    }

    const files = fs.readdirSync(cardsDir)
    const cards = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => `/card2/pool-${pool}/${file}`) 

    res.status(200).json({ cards })
  } catch (_error) {
    res.status(500).json({ error: '無法讀取卡片目錄' })
  }
}
