type State = {
  notification: {
    show: boolean
    title: string
    content: string
  }
}

export const state: State = (): State => ({
  notification: {
    show: false,
    title: '',
    content: ''
  }
})

export const mutations = {
  showNotification(
    state: State,
    { title, content }: { title: string; content: string }
  ) {
    state.notification = {
      show: true,
      title,
      content
    }
  },
  hideNotification(state: State) {
    state.notification = {
      show: false,
      title: '',
      content: ''
    }
  }
}
