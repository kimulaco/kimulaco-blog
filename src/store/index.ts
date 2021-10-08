import { getPostList } from '../plugins/cms'
import { getPopularPostsID } from '../plugins/functions'
import { Post, PostListResponse } from '../types/blog'

type State = {
  notification: {
    show: boolean
    title: string
    content: string
  }
  popularPosts: Post[]
}

type Context = {
  state: State
  commit: Function
  dispatch: Function
}

export const state = (): State => ({
  notification: {
    show: false,
    title: '',
    content: '',
  },
  popularPosts: [],
})

export const actions = {
  async getPopularPosts({ state, commit }: Context): Promise<Post[]> {
    if (process.client) return []
    if (state.popularPosts.length > 0) return state.popularPosts
    try {
      const popularPosts = await getPopularPostsID()
      const popularPostIds: string[] = popularPosts || []
      if (popularPostIds.length <= 0) {
        commit('setPopularPosts', [])
        return []
      }
      const { posts }: PostListResponse = await getPostList({
        limit: popularPostIds.length,
        ids: popularPostIds.join(','),
      })
      commit('setPopularPosts', posts)
      return posts
    } catch {
      return []
    }
  },
}

export const mutations = {
  showNotification(
    state: State,
    { title, content }: { title: string; content: string },
  ) {
    state.notification = {
      show: true,
      title,
      content,
    }
  },
  hideNotification(state: State) {
    state.notification = {
      show: false,
      title: '',
      content: '',
    }
  },
  setPopularPosts(state: State, popularPosts: Post[]) {
    state.popularPosts = popularPosts
  },
}
