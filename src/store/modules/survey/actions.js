import axios from 'axios'
const API_URL = 'http://localhost:3000'

export default {
  async sendToApi ({ getters }) {
    const body = JSON.stringify({
      user: {
        name: getters.name,
        goals: getters.goals.split(','),
        dob: getters.dob,
        diet: getters.diet
      }
    })

    const config = { headers: { 'Content-Type': 'application/json' } }
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
  },
  getCurrentStep ({ commit }) {
    commit('updateCurrentStep')
  }
}
