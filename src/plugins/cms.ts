import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { dateFilter } from './filter'
import {
  Post,
  Tag,
  PostRequestParam,
  PostListRequestParam,
  PostListResponse,
  TagListRequestParam
} from '../types/blog'
import { POST_COUNT_BY_PAGE } from '../utils/blog'

export const cms: AxiosInstance = axios.create({
  baseURL: `${process.env.CMS_BASE_URL}/api/v1`,
  headers: {
    'X-API-KEY': process.env.CMS_API_KEY
  }
})

const filterPost = (post: Post): Post => {
  return {
    ...post,
    created_at: dateFilter(post.created_at || ''),
    updated_at: dateFilter(post.updated_at || '')
  }
}

export const getPostList = async (
  params: PostListRequestParam = {}
): Promise<PostListResponse> => {
  const limit = params.limit || POST_COUNT_BY_PAGE
  let { data }: AxiosResponse = await cms.get('/post', {
    params: {
      limit,
      offset: (params.page || 0) * limit,
      filters: params.filters
    }
  })

  return {
    totalCount: data.totalCount,
    posts: data.contents.map((post: Post) => {
      return filterPost(post)
    })
  }
}

export const getPostListAll = async (
  params: PostListRequestParam = {}
): Promise<PostListResponse> => {
  let postList: Post[] = []
  let postCount = 0
  let resolve = false
  let index = 0

  while (!resolve) {
    const { posts, totalCount }: PostListResponse = await getPostList({
      limit: POST_COUNT_BY_PAGE,
      filters: params.filters,
      page: index
    })

    postCount += posts.length
    postList = postList.concat(posts.map((post: Post) => {
      return filterPost(post)
    }))

    index++

    if (postCount >= totalCount) {
      resolve = true
    }
  }

  return {
    posts: postList,
    totalCount: postList.length
  }
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
