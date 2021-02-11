<template>
  <div class="page">
    <div class="desc">
      <img src="@/assets/logo.png" alt="">
      <h1><span class="hey-im">Hey 👋, I’m </span><span class="highlight">George Parks</span></h1>
      <p>An Atlanta-based <span class="underline">freelance software engineer</span> and <span class="underline">web designer</span> with a passion for innovative technologies and solutions.</p>
      <div class="menu">
        <p class="menu-item hover-effect">See my work</p>
        <p class="divider">•</p>
        <p class="menu-item hover-effect">Get in touch</p>
      </div>
    </div>
    <div class="photo-holder">
      <photo :url="'https://images.unsplash.com/photo-1605772575717-4548a90a5349'" />
      <p class="caption">WAToday • <span class="light">Personal Project</span></p>
    </div>
    <stripe />
  </div>
</template>

<script>
import Photo from '../components/Photo.vue'
import Stripe from '../components/Stripe.vue'

export default {
  name: 'Home',
  components: {
    Photo,
    Stripe
  }
}
</script>

<style scoped>
img {
  height: 6rem;
  width: 6rem;
}
.desc {
  font-family: 'Playfair Display';
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  margin-left: 6vh;
}
.desc>h1 {
  font-weight: 300;
  margin: 0;
  font-size: 2.25rem;
}
.desc>p {
  margin: 0;
  max-width: 42vw;
  font-size: 1.4rem;
}
.menu-item {
  text-transform: uppercase;
  cursor: pointer;
}
.menu {
  margin: 0;
  margin-top: 0.5rem;
  letter-spacing: 0.2rem;
}
.menu>p {
  display: inline;
  margin: 0;
  font-family: 'Roboto';
  font-size: 1.4rem;
}
.divider {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.photo-holder {
  position: absolute;
  right: -2vw;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.caption {
  align-self: flex-start;
  margin: 0.25rem;
  font-size: 1.2rem;
  z-index: 2;
}

@media screen and (min-width: 1300px) {
    .desc>h1 {
      font-size: 3rem;
    }
    .desc>p {
      font-size: 1.8rem;
    }
}

@media screen and (max-width: 950px) {
    .photo-holder {
        height: 0;
        width: 0;
        opacity: 0;
    }
    .desc>p {
      max-width: 70vw;
    }
}

@media screen and (max-width: 600px) {
    .desc {
      margin-left: 2vh;
    }
    .desc>p {
      max-width: 90vw;
      font-size: 1.4rem;
    }
    .highlight {
      display: table;
      margin-top: -0.5rem;
    }
    .menu>p {
      display: block;
      margin-bottom: 0.35rem;
    }
    .divider {
      height: 0;
      width: 0;
    }
    .hey-im {
      font-size: 1.8rem;
    }
}
</style>