import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { dateFilter } from './filter'
import {
  Post,
  Tag,
  PostRequestParam,
  PostListRequestParam,
  PostListResponse,
  TagListRequestParam,
  TagListResponse,
  AboutResponse
} from '../types/blog'

const API_DEFAULT_LIMIT = 10

export const cms: AxiosInstance = axios.create({
  baseURL: `${process.env.CMS_BASE_URL}/api/v1`,
  headers: {
    'X-API-KEY': process.env.CMS_API_KEY
  }
})

const filterPost = (post: Post): Post => {
  post = {
    ...post,
    created_at: dateFilter(post.created_at || ''),
    updated_at: dateFilter(post.updated_at || '')
  }

  if (Array.isArray(post.related_posts) && post.related_posts.length > 0) {
    post.related_posts = post.related_posts.map((relatedPost: Post) => {
      return {
        ...relatedPost,
        created_at: dateFilter(relatedPost.created_at || ''),
        updated_at: dateFilter(relatedPost.updated_at || '')
      }
    })
  }

  return {
    ...post,
    created_at: dateFilter(post.created_at || ''),
    updated_at: dateFilter(post.updated_at || '')
  }
}

export const getPostList = async (
  params: PostListRequestParam = {}
): Promise<PostListResponse> => {
  const limit = params.limit || API_DEFAULT_LIMIT
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
      limit: API_DEFAULT_LIMIT,
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
  const post: AxiosResponse = await cms.get(`/post/${postId}`, {
    params: Object.assign({
      depth: 2
    }, params)
  })
  return filterPost(post.data)
}

export const getTagList = async (
  params: TagListRequestParam = {}
): Promise<TagListResponse> => {
  const limit = params.limit || API_DEFAULT_LIMIT
  const { data }: AxiosResponse = await cms.get(`/tag`, {
    params: {
      limit,
      filters: params.filters,
      offset: (params.page || 0) * limit
    }
  })
  return {
    tags: data.contents,
    totalCount: data.totalCount
  }
}

export const getTagListAll = async (
  params: TagListRequestParam = {}
): Promise<TagListResponse> => {
  let tagList: Tag[] = []
  let resolve = false
  let index = 0

  while (!resolve) {
    const { tags, totalCount }: TagListResponse = await getTagList({
      limit: API_DEFAULT_LIMIT,
      filters: params.filters,
      page: index
    })

    tagList = tagList.concat(tags)

    index++

    if (tagList.length >= totalCount) {
      resolve = true
    }
  }

  return {
    tags: tagList,
    totalCount: tagList.length
  }
}

export const getTag = async (tagId: string): Promise<Tag> => {
  const tag: AxiosResponse = await cms.get(`/tag/${tagId}`)
  return tag.data
}

export const getAbout = async (): Promise<AboutResponse> => {
  const post: AxiosResponse = await cms.get('/about')
  return post.data
}
