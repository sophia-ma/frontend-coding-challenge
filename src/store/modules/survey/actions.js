import axios from 'axios'
const API_URL = 'http://localhost:3000'

export default {
  async sendToApi (context, data) {
    const body = {}
    const config = { headers: { } }
    return axios.post(`${API_URL}/users`, body, config)
  },
  getName ({ commit }, name) {
    commit('updateName', { name })
  },
  getGoals ({ commit }, goal) {
    commit('updateGoals', { goal })
  },
  getDiet ({ commit }, diet) {
    commit('updateDiet', { diet })
  },
  getDob ({ commit }, dob) {
    commit('updateDob', { dob })
  }
}
