export type Post = {
  id: string
  status: string
  created_at: string
  updated_at?: string
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
