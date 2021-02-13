<template>
  <div class="entry">
      <div class="img">
          <slot name="img"></slot>
      </div>
      <div class="text">
          <h2>PMORSpin</h2>
          <h3>E-commerce solution</h3>
          <p class="read-more">Read More</p>
      </div>
      <div class="tech">
          <div class="item">
              <ion-icon v-tooltip="'Docker'" name="logo-docker"></ion-icon>
              <ion-icon v-tooltip="'NodeJS'" name="logo-nodejs"></ion-icon>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.entry {
    width: 40vw;
    max-width: 600px;
    height: 15vh;
    padding: 1vh;
    box-shadow: rgba(0, 0, 0, 0.212) 10px 10px 99px;
    background-color: #D98544;
    display: flex;
    border-radius: 20px;
    position: relative;
    margin-bottom: 2vh;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.img {
    height: 10vh;
    width: 10vh;
    margin: 1vh;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.6);
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.16));
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

h2, h3 {
    font-family: Roboto;
    font-weight: normal;
    letter-spacing: 0.05em;
    text-align: left;
    color: #fff;
    margin: 0.3vh;
    font-size: 1.2rem;
}

h2 {
    font-size: 2rem;
}

h3 {
    margin-bottom: 0.8vh;
}


.read-more {
    margin: 0.3vh;
}

.image, svg {
    height: 6vh
}

.tech {
    position: absolute;
    right: 1vw;
    display: flex;
    flex-direction: column;
}

ion-icon {
    height: 1.5rem;
    width: 1.5rem;
    margin-left: 0.5rem;
}
</style>