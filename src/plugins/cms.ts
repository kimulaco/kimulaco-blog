import axios from 'axios'
import { Post } from '../types/blog'
import { POST_COUNT_BY_PAGE } from '../utils/blog'

export const cms = axios.create({
  baseURL: `${process.env.CMS_BASE_URL}/api/v1`,
  headers: {
    'X-API-KEY': process.env.CMS_API_KEY
  }
})

export const getPostList = async (params: PostRequestParam = {}) => {
  const posts: any = await cms.get('/post', {
    params: {
      limit: POST_COUNT_BY_PAGE,
      offset: (params.page || 0) * POST_COUNT_BY_PAGE,
      filters: params.filters
    }
  })
  return posts.data.contents.filter((post: Post) => {
    if (process.env.NODE_ENV === 'production') {
      return post.status.id === 'public'
    }
    return true
  })
}

export const getPost = async (postId: string, params: any = {}) => {
  const post = await cms.get(`/post/${postId}`, { params })
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
