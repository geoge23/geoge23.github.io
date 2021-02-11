<template>
  <div class="reference">
      <p class="text">It’s been a pleasure to work George. He’s smart, responsive, delivers great work and practices with good professionalism and work ethic. He was quick to understand project needs, and when roadblocks…</p>
      <p class="read-more">Read More</p>
      <hr>
      <p class="author">Namita Gujral • <span class="light">Upwork Client</span></p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.reference {
    background-color: #D98544;
    border-radius: 20px;
    max-width: 40vw;
    padding: 1vh;
    box-shadow: rgba(0, 0, 0, 0.288) 10px 10px 99px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.text {
    max-width: 70%;
    margin-bottom: 1vh;
    line-height: 1.5rem;
    font-size: 1.2rem;
    letter-spacing: 0.02rem;
    font-weight: 300;
}

hr {
    width: 60%;
    height: 1px; 
    border: 0;
    background-color: #fff;
}

.author {
    margin-top: 0;
    font-weight: 400;
}
</style>