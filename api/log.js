export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Kael Logger:', req.body)
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({ ok: true })
  } else {
    res.setHeader('Content-Type', 'application/json')
    res.status(405).json({ ok: false, error: 'Method not allowed' })
  }
}
