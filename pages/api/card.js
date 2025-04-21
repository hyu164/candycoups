export default function handler(req, res) {
  const cardsDir = path.join(process.cwd(), 'public/card')
  try {
    const files = fs.readdirSync(cardsDir)
    const cards = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => `/card/${file}`)
    res.status(200).json({ cards })
  } catch { // 移除 error 參數
    res.status(500).json({ error: '無法讀取卡片目錄' })
  }
}
