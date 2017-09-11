<template>
  <div>
    <slideshow-title :title="title"></slideshow-title>
  </div>
</template>

<script>
import SlideshowTitle from './SlideshowTitle'

export default {
  components: { SlideshowTitle },
  props: {
    title: {
      required: true,
      type: String
    }
  }
}
</script>

<style>

</style>
