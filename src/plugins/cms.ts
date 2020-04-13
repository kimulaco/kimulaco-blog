import axios from 'axios'
import { Post } from '../types/blog'
import { POST_COUNT_BY_PAGE } from '../utils/blog'

const { CMS_BASE_URL, CMS_API_KEY, NODE_ENV } = process.env

type PostParams = {
  page?: number
  filters?: string
}

type PostsResponse = {
  data: {
    contents: Post[]
  }
}

export const cms = axios.create({
  baseURL: `${CMS_BASE_URL}/api/v1`,
  headers: {
    'X-API-KEY': CMS_API_KEY
  }
})

export const getPostList = async (params: PostParams = {}) => {
  const posts: PostsResponse = await cms.get('/post', {
    params: {
      limit: POST_COUNT_BY_PAGE,
      offset: (params.page || 0) * POST_COUNT_BY_PAGE,
      filters: params.filters
    }
  })
  return posts.data.contents.filter((post: Post) => {
    if (NODE_ENV === 'production') {
      return post.status.id === 'public'
    }
    return true
  })
}

export const getPost = async (postId: string) => {
  const post = await cms.get(`/post/${postId}`)
  return post.data
}

export const getTags = async () => {
  const tag = await cms.get(`/tag`)
  return tag.data.contents
}

export const getTag = async (tagId: string) => {
  const tag = await cms.get(`/tag/${tagId}`)
  return tag.data
}

export const getAbout = async () => {
  const post = await cms.get('/about')
  return post.data.content
}
