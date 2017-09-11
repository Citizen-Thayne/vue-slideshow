<template>
  <div>
    <slide-image :imageUrl="currentSlide.imageUrl"></slide-image>
    <slide-caption :caption="currentSlide.caption"></slide-caption>
  </div>
</template>

<script>
import SlideImage from './SlideImage'
import SlideCaption from './SlideCaption'

export default {
  components: { SlideImage, SlideCaption },
  props: {
    currentSlide: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
