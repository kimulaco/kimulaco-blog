const blog = require('../assets/json/blog.json')

type Tags = string[]

interface Post {
  meta: {
    id: string
    title: string
    description: string
    category: string
    tags: Tags
    status: string
    created_at: string // eslint-disable-line camelcase
    updated_at: string // eslint-disable-line camelcase
  }
  body: {
    md: string
    html: string
    text: string
  }
}

export const siteUrl = 'https://kimulaco.com'
export const siteTitle = 'kimulaco.com'
export const siteDescription = '' // TODO site description
export const posts: Post[] = blog.posts
export const tags: Tags = blog.tags

export const getPost = (postId: string): Post | null => {
  let post: Post
  for (post of posts) {
    if (post.meta.id === postId) {
      return post
    }
  }
  return null
}

export const createMeta = (
  title: string = siteTitle,
  description: string = siteDescription,
  url: string = '/'
) => {
  return [
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:site_name', property: 'og:site_name', content: title },
    { hid: 'og:url', property: 'og:url', content: `${siteUrl}${url}` },
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: description }
  ]
}

export const createPostRoutes = (): string[] => {
  const routes = posts.map((post: Post) => {
    return `/post/${post.meta.id}/`
  })
  return routes
}
