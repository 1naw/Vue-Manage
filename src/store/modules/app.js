import router from '@/router'
import { login as loginApi } from '@/api/login'
export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || ''
  }),
  mutation: {
    setToken (state, token) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    login ({ commit }, useInfo) {
      return new Promise((resolve, reject) => {
        loginApi(useInfo)
          .then((res) => {
            commit('setToken', res.token)
            router.replace('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
