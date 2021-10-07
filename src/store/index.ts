import { AxiosInstance } from 'axios'
import { getPostList } from '../plugins/cms'
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
  async getPopularPosts(
    { state, commit }: Context,
    $axios: AxiosInstance,
  ): Promise<Post[]> {
    if (process.client) return []
    if (state.popularPosts.length > 0) return state.popularPosts
    try {
      const response = await $axios.get('/api/popular-post')
      const popularPostIds: string[] = response.data.popularPosts || []
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
