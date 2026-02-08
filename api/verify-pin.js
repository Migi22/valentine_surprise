export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const { pin } = req.body || {};
  const correctPin = process.env.PIN_CODE;

  if (!correctPin) {
    return res.status(500).json({ ok: false, message: "Server not configured" });
  }

  if (pin === correctPin) {
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ ok: false, message: "Incorrect code! WAHAHAHA" });
}