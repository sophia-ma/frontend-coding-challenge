import { shallowMount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

describe('CheckButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(CheckButton, {
      propsData: {
        text: 'Lorem ipsum',
        value: 'dummy-value',
        selected: false,
        disabled: false
      }
    })
  })

  // Complete the following statements by implementing tests for the described behaviours

  it('should exist as a component', () => {
    expect(wrapper.find(CheckButton).exists()).toBe(true)
  })

  it('should render the text value passed as prop correctly', () => {
    expect(wrapper.props().text).toBe('Lorem ipsum')
  })

  it('should not attach the dynamic "check-button--selected" class when the selected prop is set to false', () => {
    wrapper.setProps({ selected: false })

    expect(wrapper.classes('check-button--selected')).toBe(false)
  })

  it('should attach the dynamic "check-button--selected" class when the selected prop is set to true', () => {
    wrapper.setProps({ selected: true })

    expect(wrapper.classes('check-button--selected')).toBe(true)
  })

  // Write additional tests based on the new logic added to the CheckButton component as part of the challenge

  it('should render the value passed as prop correctly', () => {
    expect(wrapper.props().value).toBe('dummy-value')
  })

  it('should attach the dynamic "check-button--disabled" class when the selected prop is set to false and disabled prop is set to true', () => {
    wrapper.setProps({ selected: false, disabled: true })

    expect(wrapper.classes('check-button--disabled')).toBe(true)
  })
})
