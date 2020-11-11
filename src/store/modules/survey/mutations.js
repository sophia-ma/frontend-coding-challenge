export default {
  updateName (state, { name }) {
    state.name = name
  },
  updateGoals (state, { goal }) {
    if (state.goals) {
      if (state.goals.includes(goal)) {
        if (state.goals.includes(',')) {
          state.goals = state.goals.replace(`${goal}`, '')
        } else {
          state.goals = ''
        }
      } else {
        state.goals = `${state.goals},${goal}`
      }
    } else {
      state.goals = goal
    }
    state.goals = state.goals.replace(/,+/g, ',').replace(/^,|,$/g, '')
  },
  updateDiet (state, { diet }) {
    state.diet = diet
  },
  updateDob (state, { dob }) {
    state.dob = dob
  }
}
