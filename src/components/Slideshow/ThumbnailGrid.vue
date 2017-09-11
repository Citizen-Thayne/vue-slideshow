<template>
  <div class="thumbnail-grid">
    <a v-for="slide in slides" class="slide__thumbnail" @click.prevent="handleClick(slide)" href="#">
      <img :src="slide.imageUrl" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClick: function (slide) {
      this.$emit('thumbnailClicked', slide)
    }
  }
}
</script>

<style lang="scss">
.thumbnail-grid {
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  .slide__thumbnail {
    margin: 10px;
    background-color: black;

    img {
      object-fit: contain;
      height: 100px;
      width: 100px;
    }
  }
}
</style>
