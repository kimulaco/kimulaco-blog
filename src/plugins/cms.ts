import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { dateFilter } from './filter'
import {
  Post,
  Tag,
  PostRequestParam,
  PostListRequestParam,
  PostListResponse,
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

export const getTagListDetail = async (): Promise<TagListResponse> => {
  const { posts }: PostListResponse = await getPostListAll()
  const tagData: { [key: string]: Tag } = {}

  for (const post of posts) {
    if (post.tag.length <= 0) {
      continue
    }

    for (const tag of post.tag) {
      if (tagData.hasOwnProperty(tag.id)) {
        tagData[tag.id].count++
      } else {
        tagData[tag.id] = {
          ...tag,
          count: 1
        }
      }
    }
  }

  const tags: Tag[] = Object.keys(tagData).map((tagDataId: string) => {
    return tagData[tagDataId]
  }).sort((a: Tag, b: Tag) => {
    return b.count - a.count
  })

  return {
    tags,
    totalCount: tags.length
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
