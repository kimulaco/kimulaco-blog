import axios from 'axios'
import { Post } from '../types/blog'

export const cms = axios.create({
  baseURL: `${process.env.CMS_BASE_URL}/api/v1`,
  headers: {
    'X-API-KEY': process.env.CMS_API_KEY
  }
})

export const getPostList = async (params: any = {}) => {
  const posts: any = await cms.get('/post', { params })
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
