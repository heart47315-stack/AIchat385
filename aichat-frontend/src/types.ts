export interface Character {
  id: string
  name: string
  description: string
  image: string
  tag: string
}

export interface Message {
  role: "user" | "ai"
  text: string
}