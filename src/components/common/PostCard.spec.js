import { mount, RouterLinkStub } from '@vue/test-utils'
import PostCard from '@/components/common/PostCard'

describe('PostCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PostCard, {
      propsData: {
        id: 'post-card-test',
        title: 'post card test',
        description: 'post card description',
        content: 'post card content',
        tags: ['tag1', 'tag2', 'tag3'],
        createdAt: '2019-10-01'
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
