import Vue from 'vue'
import SlideshowTitle from '@/components/Slideshow/SlideshowTitle'

function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('SlideshowTitle.vue', () => {
  it('should render correct contents', () => {
    expect(getRenderedText(SlideshowTitle, { title: 'My Test Title' }))
      .to.equal('My Test Title')
  })
})
