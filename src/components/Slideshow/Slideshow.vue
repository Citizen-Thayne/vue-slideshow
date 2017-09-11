<template>
  <div class="slideshow">
    <slideshow-header :title="title"></slideshow-header>
    <slide-image :imageUrl="currentSlide.imageUrl"></slide-image>
    <slide-progress :currentSlide="slideIndex + 1" :totalSlides="slides.length"></slide-progress>
    <slide-caption :caption="currentSlide.caption"></slide-caption>
    <button class="slideshow__control prev" @click="previousSlide">Prev</button>
    <button class="slideshow__control next" @click="nextSlide">Next</button>
    <thumbnail-grid :slides="slides" @thumbnailClicked="setSlide"></thumbnail-grid>
  </div>
</template>

<script>
import SlideshowHeader from './SlideshowHeader'
import SlideshowBody from './SlideshowBody'
import SlideImage from './SlideImage'
import SlideCaption from './SlideCaption'
import SlideProgress from './SlideProgress'
import ThumbnailGrid from './ThumbnailGrid'

export default {
  components: {
    SlideshowHeader,
    SlideshowBody,
    SlideImage,
    SlideCaption,
    SlideProgress,
    ThumbnailGrid
  },
  data: function () {
    return {
      slideIndex: 0
    }
  },
  computed: {
    currentSlide: function () {
      return this.slides[this.slideIndex]
    }
  },
  props: {
    slides: {
      type: Array,
      required: true
    },
    title: {
      required: true,
      type: String
    }
  },
  methods: {
    nextSlide () {
      this.slideIndex = ++this.slideIndex >= this.slides.length ? this.slides.length - 1 : this.slideIndex
    },
    previousSlide () {
      this.slideIndex = --this.slideIndex < 0 ? 0 : this.slideIndex
    },
    setSlide (slide) {
      let index = this.slides.indexOf(slide)
      this.slideIndex = index
    }
  }
}
</script>

<style>

</style>
