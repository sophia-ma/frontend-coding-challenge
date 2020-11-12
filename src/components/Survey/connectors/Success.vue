<script>
import ThvButton from '@/components/Shared/Button'
import Logomark from '@/assets/images/thrivaling.png'
import { format } from 'date-fns'

export default {
  name: 'Success',
  components: {
    ThvButton
  },
  computed: {
    logoSrc () {
      return Logomark
    },
    name () {
      return this.$store.getters['survey/name']
    },
    goals () {
      return this.$store.getters['survey/goals']
    },
    diet () {
      return this.$store.getters['survey/diet']
    },
    dob () {
      return format(new Date(this.$store.getters['survey/dob']), 'dd/MM/yyyy')
    }
  },
  methods: {
    startOver () {
      this.$store.dispatch('survey/resetState')
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <div class="grid-x grid-x-margin sp__top--md">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-success align-center">
        <img :src="logoSrc" height="150" />

        <div class="spacer sp__top--xs"></div>
        <h1>All done!</h1>

        <div class="spacer sp__top--xs"></div>
        <p class="body--large">Thank you for completing the survey. The <br/> following results have been submitted:</p>
        <div class="spacer sp__top--sm"></div>

        <div class="card br--sm">
          <div class="align-left">
            <p class="text--grey title">Name</p>
            <p class="text--xx-dark-grey">{{ name }}</p>

            <div class="spacer sp__top--xs"></div>
            <p class="text--grey title">Goals</p>
            <p class="text--xx-dark-grey">{{ goals }}</p>

            <div class="spacer sp__top--xs"></div>
            <p class="text--grey title">Diet</p>
            <p class="text--xx-dark-grey">{{ diet }}</p>

            <div class="spacer sp__top--xs"></div>
            <p class="text--grey title">DOB</p>
            <p class="text--xx-dark-grey">{{ dob }}</p>

            <div class="spacer sp__top--sm"></div>
          </div>

          <thv-button element="button" size="large" @click="startOver">Start over</thv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='css'>
  .card {
    box-shadow: 0 6px 20px #3e4351;
    padding: 30px;
    margin: 0 100px;
  }

  .card .button {
    max-width: 202px!important;
  }

  .card .title {
    font-size: 14px;
  }

  .align-left {
    text-align: left;
  }
</style>
