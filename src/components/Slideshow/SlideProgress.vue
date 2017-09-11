<template>
  <div>
    ( {{currentSlide}} / {{totalSlides}} )
    </div>
</template>

<script>
export default {
  props: {
    currentSlide: {
      type: Number,
      required: true
    },
    totalSlides: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>

</style>
