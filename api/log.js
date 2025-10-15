export default function handler(req, res) {
  // Sempre responde rápido e em JSON
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');

  // 1) Pré-flight / chamadas de teste
  if (req.method === 'OPTIONS' || req.method === 'GET') {
    return res.status(200).json({ ok: true, ping: true, method: req.method });
  }

  // 2) Registro oficial (POST)
  if (req.method === 'POST') {
    try {
      const payload = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      console.log('Kael Logger (POST):', payload);
      return res.status(200).json({ ok: true });
    } catch (e) {
      console.error('Kael Logger error:', e);
      return res.status(200).json({ ok: true, note: 'parse-error-ignored' });
    }
  }

  // 3) Outros métodos
  return res.status(405).json({ ok: false, error: 'Method not allowed' });
}
