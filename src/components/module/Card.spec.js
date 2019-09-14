import { mount } from '@vue/test-utils'
import Card from '@/components/module/Card'

describe('Card', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Card)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
