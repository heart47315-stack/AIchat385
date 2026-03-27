export interface Character {
  id: number
  name: string
  description?: string
  avatar?: string
  class: string
  userId: number
}

export type Message = {
  role: "user" | "ai"
  text: string
}