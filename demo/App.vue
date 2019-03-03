<template>
  <div id="app">
    <vue-default-image class="image" src="http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" />
    <vue-default-image class="image" alt="test" />
  </div>
</template>

<script>
import VueDefaultImage from '../src/components/vue-default-image'

export default {
  name: 'app',
  components: {
    VueDefaultImage,
  },
}
</script>

<style scoped>
.image {
  height: 400px;
  width: 800px;
}
</style>
