<template>
  <div class="photo">
      <img :src="url" alt="">
  </div>
</template>

<script>
export default {
    props: {
        url: String
    }
}
</script>

<style scoped>
.photo {
    height: 30vw;
    width: 50vw;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.67) 10px 10px 99px;
    z-index: 2;
}
img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>