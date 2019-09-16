export const state = () => ({
  list: []
})

export const mutations = {
  update(state, list) {
    state.list = list
  }
}
