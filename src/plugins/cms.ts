import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { dateFilter } from './filter'
import {
  Post,
  Tag,
  PostRequestParam,
  PostListRequestParam,
  TagListRequestParam
} from '../types/blog'
import { POST_COUNT_BY_PAGE } from '../utils/blog'

const filterPost = (post: Post): Post => {
  return {
    ...post,
    created_at: dateFilter(post.created_at || ''),
    updated_at: dateFilter(post.updated_at || '')
  }
}

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
  }).map((post: Post) => {
    return filterPost(post)
  })
}

export const getPostAll = async (
  params: PostListRequestParam = {}
): Promise<Post[]> => {
  let posts: Post[] = []
  let offset = 0
  let postCount = 0
  let resolve = false

  while (!resolve) {
    const postList: AxiosResponse = await cms.get('/post', {
      params: {
        limit: POST_COUNT_BY_PAGE,
        filters: params.filters,
        offset
      }
    })
    postCount += postList.data.contents.length
    posts = posts.concat(postList.data.contents.filter((post: Post) => {
      if (process.env.NODE_ENV === 'production') {
        return post.status.id === 'public'
      }
      return true
    })).map((post: Post) => {
      return filterPost(post)
    })
    offset++
    if (
      postList.data.totalCount <= 0 ||
      postCount >= postList.data.totalCount
    ) {
      resolve = true
    }
  }

  return posts
}

export const getPost = async (
  postId: string,
  params: PostRequestParam = {}
): Promise<Post> => {
  const post: AxiosResponse = await cms.get(`/post/${postId}`, { params })
  return filterPost(post.data)
}

export const getTags = async (
  params: TagListRequestParam = {}
): Promise<Tag[]> => {
  const tag: AxiosResponse = await cms.get(`/tag`, { params })
  return tag.data.contents
}

export const getTagAll = async (): Promise<Tag[]> => {
  let tags: Tag[] = []
  let offset = 0
  let resolve = false

  while (!resolve) {
    const tag: AxiosResponse = await cms.get(`/tag`, {
      params: {
        limit: 20,
        offset
      }
    })
    tags = tags.concat(tag.data.contents)
    offset++
    if (tags.length >= tag.data.totalCount) {
      resolve = true
    }
  }

  return tags
}

export const getTag = async (tagId: string): Promise<Tag> => {
  const tag: AxiosResponse = await cms.get(`/tag/${tagId}`)
  return tag.data
}

export const getAbout = async (): Promise<string> => {
  const post: AxiosResponse = await cms.get('/about')
  return post.data.content
}
