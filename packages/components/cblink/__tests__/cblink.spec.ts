import { mount } from '@vue/test-utils'
import Cblink from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Cblink.vue', () => {
  test('render test', () => {
    const wrapper = mount(Cblink, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
