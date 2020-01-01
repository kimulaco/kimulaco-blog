export type Post = {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  description: string
  category: {
    id: string
    createdAt: string
    updatedAt: string
    name: string
    description: string
  }
  content: string
}
