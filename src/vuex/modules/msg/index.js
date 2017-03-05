const msg = {
  state: {
    data: []
  },
  mutations: {
    add (state, payload) {
      state.data.push(payload.msg)
    },
    delete (state, payload) {
      state.data = state.data.filter(item => item.id != payload.id)
    },
    modify (state, payload) {
      state.data = state.data.map(item => {
        if(item.id == payload.msg.id){
          return {
            ...item,
            ...payload.msg
          }
        }else {
          return item
        }
      })
    }
  }
}

export default msg
