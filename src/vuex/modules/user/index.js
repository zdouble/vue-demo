const user = {
  state: {
    userName: null
  },
  mutations: {
    login (state, payload) {
      state.userName = payload.userName
    },
    logout (state) {
      state.userName = null
    }
  }
}
export default user
