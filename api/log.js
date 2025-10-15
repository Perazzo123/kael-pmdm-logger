export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');

  // ✅ Permitir GET e POST para testes e uso real
  if (req.method === 'GET') {
    return res.status(200).json({ ok: true, message: 'Kael Logger ativo e ouvindo 👂' });
  }

  if (req.method === 'POST') {
    try {
      const data = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      console.log('📜 Kael Logger recebido:', data);
      return res.status(200).json({ ok: true, received: data });
    } catch (err) {
      console.error('Erro ao processar log:', err);
      return res.status(400).json({ ok: false, error: 'Invalid JSON' });
    }
  }

  // Outros métodos (PUT, DELETE etc.)
  return res.status(405).json({ ok: false, error: `Method ${req.method} not allowed` });
}
