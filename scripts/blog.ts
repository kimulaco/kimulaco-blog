import dotenv from 'dotenv'
import { Post } from '../src/types/blog'

if (!process.env.CMS_BASE_URL || !process.env.CMS_API_KEY) {
  dotenv.config()
}

import { getPostList } from '../src/plugins/cms' // eslint-disable-line import/first

export const createPostRoutes = async (): Promise<string[]> => {
  const posts: Post[] = await getPostList()
  const routes = posts.map((post: Post) => {
    return `/post/${post.id}/`
  })
  return routes
}
