<template>
  <div class="slide__caption">
    {{caption}}
  </div>
</template>

<script>
export default {
  props: {
    caption: {
      required: true,
      type: String
    }
  }
}
</script>

<style>

</style>
