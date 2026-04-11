import jwt from "jsonwebtoken"

export function auth(req: any, res: any, next: any) {
  const token = req.headers.authorization?.split(" ")[1]

  if (!token) return res.sendStatus(401)

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    req.user = decoded
    next()
  } catch {
    res.sendStatus(403)
  }
}