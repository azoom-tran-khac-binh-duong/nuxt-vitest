import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Counter from './Counter.vue'

describe('AzCounter Component', () => {
  test('should render corrent title',() => {
    // Arrange
    const title = 'Counter'

    // Act
    const wrapper = mount(Counter, {
      props: {
        title,
      },
    })

    // Assert
    expect(wrapper.find('.title').text()).toBe(title)
  })

  test('should render corrent count when user click increment button',async () => {
    // Arrange
    const title = 'Counter'
    const count = 1
    const wrapper = mount(Counter,{
      props: {
        title,
      },
    })
    
    // Act
    const buttonIncrement = wrapper.find('.button.-increment')
    await buttonIncrement.trigger('click')

    // Assert
    expect(wrapper.find('.value').text()).toBe(count.toString())
  })
})
