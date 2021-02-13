<template>
<div class="sidebar">
    <img src="@/assets/logo.png" alt="">
    <p class="return-home" @click="() => $router.push('/')">
        Return<br>
        Home <ion-icon name="return-up-back-outline"></ion-icon>
    </p>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sidebar {
  --padding: 2vh;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  height: calc(100vh - var(--padding));
  flex-direction: column;
  justify-content: space-between;
  padding: var(--padding);
}

.sidebar > img {
  height: 18vh;

}

.return-home {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 600;
    cursor: pointer;
}
</style>