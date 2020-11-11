export default {
  updateName (state, { name }) {
    state.name = name
  },
  updateSelectedGoals (state, { goal }) {
    if (state.selectedGoals) {
      if (state.selectedGoals.includes(goal)) {
        if (state.selectedGoals.includes(',')) {
          state.selectedGoals = state.selectedGoals.replace(`${goal}`, '')
        } else {
          state.selectedGoals = ''
        }
      } else {
        state.selectedGoals = `${state.selectedGoals},${goal}`
      }
    } else {
      state.selectedGoals = goal
    }
    state.selectedGoals = state.selectedGoals.replace(/,+/g, ',').replace(/^,|,$/g, '')
  },
  updateSelectedDiet (state, { diet }) {
    state.selectedDiet = diet
  }
}
