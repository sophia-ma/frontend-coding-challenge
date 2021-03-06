<script>
export default {
  name: 'ThvButton',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: value => {
        return ['small', 'medium', 'large'].includes(value)
      }
    },
    element: {
      type: String,
      default: 'a',
      validator: value => {
        return ['a', 'button', 'nuxtLink', 'routerLink'].includes(value)
      }
    },
    type: {
      type: String,
      default: 'primary',
      validator: value => {
        return ['primary', 'transparent'].includes(value)
      }
    },
    link: {
      type: String,
      default: '#'
    },
    colour: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colourModifierClass () {
      if (this.colour) {
        return `button--${this.colour}`
      } else {
        return null
      }
    }
  }
}
</script>

<template>
    <span>
      <a class="button" v-if="element==='a'" :class="['button--' + size, colourModifierClass, type]" :href="link">
        <slot name="icon"></slot>
        <slot></slot>
      </a>
      <button class="button" :disabled="disabled" v-else-if="element==='button'" :class="['button--' + size, colourModifierClass, type]" @click="$emit('click')">
        <slot name="icon"></slot>
        <slot></slot>
      </button>
      <nuxt-link class="button" v-else-if="element==='nuxtLink'" :class="['button--' + size, colourModifierClass, type]" :to="link">
        <slot name="icon"></slot>
        <slot></slot>
      </nuxt-link>
      <router-link class="button" v-else-if="element==='routerLink'" :class="['button--' + size, colourModifierClass, type]" :to="link">
        <slot name="icon"></slot>
        <slot></slot>
      </router-link>
    </span>
</template>

<style lang='css'>
a.button,
button.button {
  position: relative;
  background-color: #3ecadd;
  border: 2px solid #3ecadd;
  border-radius: 100px;
  height: 40px;
  line-height: 36.69724770642202px;
  font: 16px/40px 'sofia-pro', 'sofia pro', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  padding: 0 26.666666666666668px;
  min-width: 105px;
  color: #fff;
  margin: 0;
  display: inline-block;
  transition: 0.2s;
  text-align: center;
  outline: none;
  cursor: pointer;
  text-decoration: none;
}
a.button--large,
button.button--large {
  height: 46px;
  line-height: 42.20183486238532px;
  padding: 0 30.666666666666668px;
}
a.button--small,
button.button--small {
  font-size: 14px;
  height: 32px;
  line-height: 29.357798165137613px;
  padding: 0 16px;
}
@media (min-width: 768px) {
  a.button:hover,
  button.button:hover {
    transform: translateY(-3px);
    background-color: #51cfe0;
    border: 2px solid #51cfe0;
    box-shadow: 0 1px 4px 0 rgba(86,91,117,0.18);
    color: #fff;
    position: relative;
  }
  a.button:hover:before,
  button.button:hover:before {
    content: '';
    height: 10px;
    width: 100%;
    background: transparent;
    position: absolute;
    bottom: -3px;
    left: 0;
  }
}
a.button:active,
button.button:active {
  transform: translateY(0);
  background-color: #24b8cd;
  border: 2px solid #24b8cd;
}
a.button:focus:active:before,
button.button:focus:active:before {
  display: none;
}
a.button:focus:after,
button.button:focus:after {
  content: '';
  position: absolute;
  border-radius: 100px;
  top: -3px;
  right: -3px;
  bottom: -3px;
  left: -3px;
  border: 2px solid #fff;
  box-shadow: 0 0 6px 0 #3ecadd;
}
a.button.disabled,
button.button.disabled,
a.button:disabled,
button.button:disabled {
  cursor: default;
  opacity: 0.4;
}
a.button.disabled:hover,
button.button.disabled:hover,
a.button:disabled:hover,
button.button:disabled:hover,
a.button.disabled:active,
button.button.disabled:active,
a.button:disabled:active,
button.button:disabled:active,
a.button.disabled:focus,
button.button.disabled:focus,
a.button:disabled:focus,
button.button:disabled:focus {
  transform: translateY(0);
  box-shadow: none;
  background-color: #3ecadd;
}
a.button--secondary,
button.button--secondary {
  background-color: #99a2bf;
  border: 2px solid #99a2bf;
}
a.button--secondary:hover,
button.button--secondary:hover {
  background-color: #a3abc5;
  border: 2px solid #a3abc5;
}
a.button--secondary:active,
button.button--secondary:active {
  background-color: #7985ab;
  border: 2px solid #7985ab;
}
a.button--secondary:focus:after,
button.button--secondary:focus:after {
  box-shadow: 0 0 6px 0 #99a2bf;
}
a.button--pink,
button.button--pink {
  background-color: #fa476f;
  border: 2px solid #fa476f;
}
a.button--pink:hover,
button.button--pink:hover {
  background-color: #fb597d;
  border: 2px solid #fb6a8a;
}
a.button--pink:active,
button.button--pink:active {
  background-color: #fb6385;
  border: 2px solid #fc7a97;
}
a.button--pink:focus:after,
button.button--pink:focus:after {
  box-shadow: 0 0 6px 0 #fa476f;
}
a.button--purple,
button.button--purple {
  background-color: #664277;
  border: 2px solid #664277;
}
a.button--purple:hover,
button.button--purple:hover {
  background-color: #784e8c;
  border: 2px solid #88589f;
}
a.button--purple:active,
button.button--purple:active {
  background-color: #815396;
  border: 2px solid #9667ab;
}
a.button--purple:focus:after,
button.button--purple:focus:after {
  box-shadow: 0 0 6px 0 #664277;
}
a.button--blue,
button.button--blue {
  background-color: #3ecadd;
  border: 2px solid #3ecadd;
}
a.button--blue:hover,
button.button--blue:hover {
  background-color: #51cfe0;
  border: 2px solid #62d4e3;
}
a.button--blue:active,
button.button--blue:active {
  background-color: #5bd2e2;
  border: 2px solid #74d9e6;
}
a.button--blue:focus:after,
button.button--blue:focus:after {
  box-shadow: 0 0 6px 0 #3ecadd;
}
a.button--light-purple,
button.button--light-purple {
  background-color: #99a2bf;
  border: 2px solid #99a2bf;
}
a.button--light-purple:hover,
button.button--light-purple:hover {
  background-color: #a3abc5;
  border: 2px solid #acb3cb;
}
a.button--light-purple:active,
button.button--light-purple:active {
  background-color: #a8b0c9;
  border: 2px solid #b5bcd1;
}
a.button--light-purple:focus:after,
button.button--light-purple:focus:after {
  box-shadow: 0 0 6px 0 #99a2bf;
}
a.button--green,
button.button--green {
  background-color: #aeec73;
  border: 2px solid #aeec73;
}
a.button--green:hover,
button.button--green:hover {
  background-color: #b6ee81;
  border: 2px solid #bdf08e;
}
a.button--green:active,
button.button--green:active {
  background-color: #baef88;
  border: 2px solid #c4f19a;
}
a.button--green:focus:after,
button.button--green:focus:after {
  box-shadow: 0 0 6px 0 #aeec73;
}
a.button--sand,
button.button--sand {
  background-color: #f0dbcc;
  border: 2px solid #f0dbcc;
}
a.button--sand:hover,
button.button--sand:hover {
  background-color: #f1dfd1;
  border: 2px solid #f2e2d6;
}
a.button--sand:active,
button.button--sand:active {
  background-color: #f2e0d4;
  border: 2px solid #f4e5da;
}
a.button--sand:focus:after,
button.button--sand:focus:after {
  box-shadow: 0 0 6px 0 #f0dbcc;
}
a.button--orange,
button.button--orange {
  background-color: #ffc662;
  border: 2px solid #ffc662;
}
a.button--orange:hover,
button.button--orange:hover {
  background-color: #ffcc72;
  border: 2px solid #ffd180;
}
a.button--orange:active,
button.button--orange:active {
  background-color: #ffcf7a;
  border: 2px solid #ffd68e;
}
a.button--orange:focus:after,
button.button--orange:focus:after {
  box-shadow: 0 0 6px 0 #ffc662;
}
a.button--red,
button.button--red {
  background-color: #ff7987;
  border: 2px solid #ff7987;
}
a.button--red:hover,
button.button--red:hover {
  background-color: #ff8693;
  border: 2px solid #ff929e;
}
a.button--red:active,
button.button--red:active {
  background-color: #ff8d99;
  border: 2px solid #ff9ea8;
}
a.button--red:focus:after,
button.button--red:focus:after {
  box-shadow: 0 0 6px 0 #ff7987;
}
a.button--xx-light-grey,
button.button--xx-light-grey {
  background-color: #f7f9fb;
  border: 2px solid #f7f9fb;
}
a.button--xx-light-grey:hover,
button.button--xx-light-grey:hover {
  background-color: #f8fafb;
  border: 2px solid #f9fbfb;
}
a.button--xx-light-grey:active,
button.button--xx-light-grey:active {
  background-color: #f8fafc;
  border: 2px solid #f9fbfc;
}
a.button--xx-light-grey:focus:after,
button.button--xx-light-grey:focus:after {
  box-shadow: 0 0 6px 0 #f7f9fb;
}
a.button--x-light-grey,
button.button--x-light-grey {
  background-color: #eff4f7;
  border: 2px solid #eff4f7;
}
a.button--x-light-grey:hover,
button.button--x-light-grey:hover {
  background-color: #f1f5f8;
  border: 2px solid #f2f6f9;
}
a.button--x-light-grey:active,
button.button--x-light-grey:active {
  background-color: #f1f6f8;
  border: 2px solid #f3f7f9;
}
a.button--x-light-grey:focus:after,
button.button--x-light-grey:focus:after {
  box-shadow: 0 0 6px 0 #eff4f7;
}
a.button--light-grey,
button.button--light-grey {
  background-color: #e5e7f1;
  border: 2px solid #e5e7f1;
}
a.button--light-grey:hover,
button.button--light-grey:hover {
  background-color: #e8e9f2;
  border: 2px solid #eaebf3;
}
a.button--light-grey:active,
button.button--light-grey:active {
  background-color: #e9ebf3;
  border: 2px solid #eceef5;
}
a.button--light-grey:focus:after,
button.button--light-grey:focus:after {
  box-shadow: 0 0 6px 0 #e5e7f1;
}
a.button--input-border-grey,
button.button--input-border-grey {
  background-color: #ced0d9;
  border: 2px solid #ced0d9;
}
a.button--input-border-grey:hover,
button.button--input-border-grey:hover {
  background-color: #d3d5dd;
  border: 2px solid #d7d9e0;
}
a.button--input-border-grey:active,
button.button--input-border-grey:active {
  background-color: #d5d7df;
  border: 2px solid #dbdde4;
}
a.button--input-border-grey:focus:after,
button.button--input-border-grey:focus:after {
  box-shadow: 0 0 6px 0 #ced0d9;
}
a.button--grey,
button.button--grey {
  background-color: #99a2bf;
  border: 2px solid #99a2bf;
}
a.button--grey:hover,
button.button--grey:hover {
  background-color: #a3abc5;
  border: 2px solid #acb3cb;
}
a.button--grey:active,
button.button--grey:active {
  background-color: #a8b0c9;
  border: 2px solid #b5bcd1;
}
a.button--grey:focus:after,
button.button--grey:focus:after {
  box-shadow: 0 0 6px 0 #99a2bf;
}
a.button--dark-grey,
button.button--dark-grey {
  background-color: #6f749a;
  border: 2px solid #6f749a;
}
a.button--dark-grey:hover,
button.button--dark-grey:hover {
  background-color: #7d82a4;
  border: 2px solid #8a8ead;
}
a.button--dark-grey:active,
button.button--dark-grey:active {
  background-color: #8589a9;
  border: 2px solid #979bb6;
}
a.button--dark-grey:focus:after,
button.button--dark-grey:focus:after {
  box-shadow: 0 0 6px 0 #6f749a;
}
a.button--x-dark-grey,
button.button--x-dark-grey {
  background-color: #565b75;
  border: 2px solid #565b75;
}
a.button--x-dark-grey:hover,
button.button--x-dark-grey:hover {
  background-color: #636987;
  border: 2px solid #707696;
}
a.button--x-dark-grey:active,
button.button--x-dark-grey:active {
  background-color: #6a7090;
  border: 2px solid #8085a1;
}
a.button--x-dark-grey:focus:after,
button.button--x-dark-grey:focus:after {
  box-shadow: 0 0 6px 0 #565b75;
}
a.button--xx-dark-grey,
button.button--xx-dark-grey {
  background-color: #3d4250;
  border: 2px solid #3d4250;
}
a.button--xx-dark-grey:hover,
button.button--xx-dark-grey:hover {
  background-color: #4d5365;
  border: 2px solid #5b6278;
}
a.button--xx-dark-grey:active,
button.button--xx-dark-grey:active {
  background-color: #555c6f;
  border: 2px solid #69728a;
}
a.button--xx-dark-grey:focus:after,
button.button--xx-dark-grey:focus:after {
  box-shadow: 0 0 6px 0 #3d4250;
}
a.button--white,
button.button--white {
  background-color: #fff;
  border: 2px solid #fff;
}
a.button--white:hover,
button.button--white:hover {
  background-color: #fff;
  border: 2px solid #fff;
}
a.button--white:active,
button.button--white:active {
  background-color: #fff;
  border: 2px solid #fff;
}
a.button--white:focus:after,
button.button--white:focus:after {
  box-shadow: 0 0 6px 0 #fff;
}
a.button--headings,
button.button--headings {
  background-color: #565b75;
  border: 2px solid #565b75;
}
a.button--headings:hover,
button.button--headings:hover {
  background-color: #636987;
  border: 2px solid #707696;
}
a.button--headings:active,
button.button--headings:active {
  background-color: #6a7090;
  border: 2px solid #8085a1;
}
a.button--headings:focus:after,
button.button--headings:focus:after {
  box-shadow: 0 0 6px 0 #565b75;
}
a.button--body,
button.button--body {
  background-color: #6f749a;
  border: 2px solid #6f749a;
}
a.button--body:hover,
button.button--body:hover {
  background-color: #7d82a4;
  border: 2px solid #8a8ead;
}
a.button--body:active,
button.button--body:active {
  background-color: #8589a9;
  border: 2px solid #979bb6;
}
a.button--body:focus:after,
button.button--body:focus:after {
  box-shadow: 0 0 6px 0 #6f749a;
}
a.button--static:hover,
button.button--static:hover {
  transform: none;
  box-shadow: none;
}
a.button.transparent,
button.button.transparent {
  background-color: #fff;
  border: 2px solid #e5e7f1;
  color: #565b75;
}
a.button.transparent:hover,
button.button.transparent:hover {
  background-color: #fff;
  border: 2px solid #eff1f7;
  color: #565b75;
}

</style>
