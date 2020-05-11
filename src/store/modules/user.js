
const state = {
  fullName: '',
  email: '',
  hobbies: ''
}
const getters = {
  fullName: (state) => state.fullName,
  email: (state) => state.email,
  hobbies: (state) => state.hobbies
}
const actions = {
  changeFullName ({ commit }, payload) {
    commit('setFullName', payload)
  },
  changeEmail ({ commit }, payload) {
    commit('setEmail', payload)
  },
  changeHobbies ({ commit }, payload) {
    commit('setHobbies', payload)
  },
  clearAll ({ commit }) {
    commit('clearAllState')
  }
}
const mutations = {
  setFullName (state, payload) {
    state.fullName = payload
  },
  setEmail (state, payload) {
    state.email = payload
  },
  setHobbies  (state, payload) {
    state.hobbies = payload
  },
  clearAllState (state) {
    state.fullName = ''
    state.email = ''
    state.hobbies = ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
