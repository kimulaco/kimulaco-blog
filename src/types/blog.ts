export type Tag = {
  id: string
  name: string
  createdAt?: string
  updatedAt?: string
}

export type Post = {
  id: string
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
  related_posts: Post[]
}

export type PostRequestParam = {
  draftKey?: string
}

export type PostListRequestParam = {
  limit?: number | undefined
  page?: number | undefined
  filters?: string | undefined
}

export type PostListResponse = {
  posts: Post[]
  totalCount: number
}

export type TagListRequestParam = {
  limit?: number | undefined
  page?: number | undefined
  filters?: string | undefined
}

export type TagListResponse = {
  tags: Tag[]
  totalCount: number
}

export type AboutResponse = {
  about: string
  contact: string
}
