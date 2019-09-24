const blog = require('../assets/json/blog.json')

export const siteUrl = 'https://kimulaco.com'
export const siteTitle = 'kimulaco.com'
export const siteDescription = ''
export const posts = blog.posts
export const tags = blog.tags

export const getPost = (postId: string) => {
  let post: any = {}
  for (post of posts) {
    if (post.id === postId) {
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
    { hid: 'og:description', property: 'og:description', content: description },
  ]
}
