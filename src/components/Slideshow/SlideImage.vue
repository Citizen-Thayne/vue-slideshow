<template>
  <img class="slide__image" :src="imageUrl" />
</template>

<script>
export default {
  props: {
    imageUrl: {
      required: true,
      type: String
    }
  }
}
</script>

<style>

</style>
