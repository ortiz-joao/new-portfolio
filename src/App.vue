<script setup>
import LazyTheWelcome from './components/TheWelcome.vue';
import Intro from './components/Intro.vue'
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Lenis from 'lenis'
import Cursor from './components/CursorFollower.vue'
import { provide } from 'vue';

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

provide('lenis', lenis)
</script>

<template>

<div>
  <Cursor/>
  <Navbar/>
  <main >
    <Intro/>
    <About/>
    <Suspense>
      <LazyTheWelcome style="z-index: -1"/>
    </Suspense>
  </main>
</div>
  
  
</template>

<style>
* {
  box-sizing: border-box !important;
}


@font-face {
  font-family: 'oldLondon';
  src: url('@/assets/fonts/OldLondon.ttf')
}

@font-face {
  font-family: 'durer';
  src: url('@/assets/fonts/IFDurer-Regular.ttf')
}

html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}

body {
  width: 100%;
  background-color: black;
  color: #a1d30d;
  margin: 0;
  font-family: 'durer';
}

.lenis {
  height: auto;
}
</style>
