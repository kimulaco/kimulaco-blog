import blog from '@/assets/json/blog'

export const posts = blog.posts
export const tags = blog.tags

export const getPost = (postId) => {
  let post = {}
  for (post of posts) {
    if (post.id === postId) {
      return post
    }
  }
  return null
}
