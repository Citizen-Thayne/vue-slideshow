<template>
  <div id="app">
    <slideshow :slides="slides" :title="title"></slideshow>
  </div>
</template>

<script>
import { Slideshow } from './components/Slideshow'
import { mockSlideshow } from '../test/unit/helpers'
const SLIDESHOW = mockSlideshow()
SLIDESHOW.title = 'My Example Slideshow'
export default {
  name: 'app',
  components: {
    Slideshow
  },
  data: function () {
    return {
      title: SLIDESHOW.title,
      slides: SLIDESHOW.slides
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
