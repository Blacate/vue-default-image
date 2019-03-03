<template>
  <img
    :src="url"
    alt="cover"
    class="vue-default-image"
  >
</template>

<script>
export default {
  name: 'vue-default-image',
  props: {
    src: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      url: require('./default.jpg'),
    }
  },
  watch: {
    src(val) {
      this.loadImg(val)
    },
  },
  created() {
    if (this.src) {
      this.loadImg(this.src)
    }
  },
  methods: {
    loadImg(src) {
      const testImg = new Image()
      testImg.src = src
      testImg.onload = () => {
        this.url = src
      }
    },
  },
}
</script>

<style scoped>
.vue-default-image {
  object-fit: cover;
  object-position: center;
}
</style>
