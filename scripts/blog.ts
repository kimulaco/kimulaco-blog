import { Post, Tag } from '../src/types/blog'
import { getPostList, getTags } from '../src/plugins/cms' // eslint-disable-line import/first

export const createPostRoutes = async (): Promise<string[]> => {
  const posts: Post[] = await getPostList()
  const routes = posts.map((post: Post) => {
    return `/post/${post.id}/`
  })
  return routes
}

export const createTagRoutes = async (): Promise<string[]> => {
  const tags: Tag[] = await getTags()
  const routes = tags.map((tag: Tag) => {
    return `/tag/${tag.id}/`
  })
  return routes
}
