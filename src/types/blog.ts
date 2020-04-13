export type Tag = {
  id: string
  name: string
  createdAt?: string
  updatedAt?: string
}

export type Post = {
  id: string
  status: {
    id: string
    createdAt: string
    updatedAt: string
    name: string
  }
  created_at: string
  updated_at?: string
  createdAt: string
  updatedAt: string
  title: string
  description: string
  image?: {
    url: string
  }
  category: {
    id: string
    createdAt: string
    updatedAt: string
    name: string
    description: string
  }
  tag: Tag[]
  content: string
}
