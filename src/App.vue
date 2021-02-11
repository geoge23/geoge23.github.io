<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
@import url(https://fonts.googleapis.com/css?family=Playfair+Display:regular,500,600,700,800,900,italic,500italic,600italic,700italic,800italic,900italic);
:root {
  color: white;
  font-family: 'Roboto';
  z-index: 1;
}
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.page {
  background: linear-gradient(#CE8A58, #D57E3F);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.highlight {
  font-weight: 600;
  position: relative;
  z-index: 5;
}
.highlight:before {
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  height: 60%;
  margin-left: -1%;
  width: 110%;
  content: "";
  background-color: #423BFF;
  opacity: 0.42;
}
.underline {
  text-decoration: underline;
}
.light {
  font-weight: 300;
}
.hover-effect {
  position: relative;
}
.hover-effect::after {
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  content: "";
  height: 0.15rem;
  width: 0;
  transition: 100ms ease;
  background-color: #413bff29;
}
.hover-effect:hover::after {
  width: 100%;
}
.read-more {
    margin: 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1rem;
    cursor: pointer;
}
</style>
