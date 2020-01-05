type BreadCrumb = BreadCrumbItem[]

type BreadCrumbItem = {
  text: string
  url?: string
}

type State = {
  list: BreadCrumb
}

export const state = (): State => ({
  list: []
})

export const mutations = {
  update(state: State, title: string) {
    state.list = [
      { text: 'Home', url: '/' },
      { text: title }
    ]
  },
  hide(state: State) {
    state.list = []
  }
}
