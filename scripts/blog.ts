import removeMd from 'remove-markdown'
import { PostListResponse, TagListResponse, Post, Tag } from '../src/types/blog'
import {
  PUBLISHER_NAME,
  PUBLISHER_EMAIL,
  SITE_URL,
  SITE_ICONS,
  FEED_CONFIG
} from '../src/utils/blog'
import { getPostListAll, getTagListDetail } from '../src/plugins/cms' // eslint-disable-line import/first

export const createPostRoutes = async (): Promise<string[]> => {
  const { posts }: PostListResponse = await getPostListAll()
  const routes = (posts || []).map((post: Post) => {
    return `/post/${post.id}/`
  })
  return routes
}

export const createTagRoutes = async (): Promise<string[]> => {
  const { tags }: TagListResponse = await getTagListDetail()
  const routes = tags.map((tag: Tag) => {
    return `/tag/${tag.id}/`
  })
  return routes
}

export const createFeed = async (feed: any) => {
  const { posts }: PostListResponse = await getPostListAll()

  feed.options = FEED_CONFIG

  for (const post of posts) {
    feed.addItem({
      title: post.title,
      id: `${SITE_URL}/post/${post.id}/`,
      link: `${SITE_URL}/post/${post.id}/`,
      description: post.description,
      content: removeMd(post.content),
      date: new Date(post.created_at),
      image: `${SITE_URL}/img/ogp.png`
    })
  }

  feed.addCategory('Blog')
  feed.addCategory('Tech')
  feed.addCategory('Web')
  feed.addContributor({
    name: PUBLISHER_NAME,
    email: PUBLISHER_EMAIL,
    link: 'https://kimulaco.me/'
  })
}
