import dotenv from 'dotenv'
import { Post } from '../src/types/blog'

if (!process.env.CMS_BASE_URL || !process.env.CMS_API_KEY) {
  dotenv.config()
}

import cms from '../src/plugins/cms' // eslint-disable-line import/first

export const createPostRoutes = async (): Promise<string[]> => {
  const { data } = await cms.get('/post')
  const posts: Post[] = data.contents
  const routes = posts.map((post: Post) => {
    return `/post/${post.id}/`
  })
  return routes
}
