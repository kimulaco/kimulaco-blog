import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { Post, Tag, PostListRequestParam } from '../types/blog'
import { POST_COUNT_BY_PAGE } from '../utils/blog'

const { CMS_BASE_URL, CMS_API_KEY, NODE_ENV } = process.env

export const cms: AxiosInstance = axios.create({
  baseURL: `${CMS_BASE_URL}/api/v1`,
  headers: {
    'X-API-KEY': CMS_API_KEY
  }
})

export const getPostList = async (
  params: PostListRequestParam = {}
): Promise<Post[]> => {
  const posts: AxiosResponse = await cms.get('/post', {
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

export const getPost = async (postId: string): Promise<Post> => {
  const post: AxiosResponse = await cms.get(`/post/${postId}`)
  return post.data
}

export const getTags = async (): Promise<Tag[]> => {
  const tag: AxiosResponse = await cms.get(`/tag`)
  return tag.data.contents
}

export const getTag = async (tagId: string): Promise<Tag> => {
  const tag: AxiosResponse = await cms.get(`/tag/${tagId}`)
  return tag.data
}

export const getAbout = async (): Promise<string> => {
  const post: AxiosResponse = await cms.get('/about')
  return post.data.content
}
