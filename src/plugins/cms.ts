import axios, { AxiosInstance, AxiosResponse } from 'axios'
import {
  Post,
  Tag,
  PostListRequestParam,
  TagListRequestParam
} from '../types/blog'
import { POST_COUNT_BY_PAGE } from '../utils/blog'

export const cms: AxiosInstance = axios.create({
  baseURL: `${process.env.CMS_BASE_URL}/api/v1`,
  headers: {
    'X-API-KEY': process.env.CMS_API_KEY
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
    if (process.env.NODE_ENV === 'production') {
      return post.status.id === 'public'
    }
    return true
  })
}

export const getPost = async (postId: string): Promise<Post> => {
  const post: AxiosResponse = await cms.get(`/post/${postId}`)
  return post.data
}

export const getTags = async (
  params: TagListRequestParam = {}
): Promise<Tag[]> => {
  const tag: AxiosResponse = await cms.get(`/tag`, {
    params
  })
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
