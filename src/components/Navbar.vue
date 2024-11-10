<template>
	<header>
    <h1 :style ref="h1">Ortiz</h1>
    <nav :style="navStyle">
      <a>Intro</a>
      <a>About</a>
      <a>Work</a>
    </nav>
  </header>
</template>
<script setup>
import { inject, ref, onMounted } from 'vue'

const h1 = ref(null)

const style = ref({
  transform: '',
  fontSize: '72px',
})

const navStyle = ref({
  opacity: '0'
})


const onScroll = ({scroll}) => {
  if( h1.value ) {
    const offsetY = Math.max(-scroll, -window.innerHeight + h1.value.clientHeight)
    if(offsetY < (-window.innerHeight/2 + 24)) {
      style.value.fontSize = '48px'
      navStyle.value.opacity = '1'
      style.value.transform = `translateY(${-window.innerHeight/2 + 24}px)`
    } else {
      navStyle.value.opacity = '0'
      style.value.fontSize = '164px'
      style.value.transform =  `translateY(${offsetY}px)`
    }
  }
}

const lenis = inject('lenis')

lenis.on('scroll',onScroll);

onMounted(() => {
  onScroll(lenis)
})
</script>
<style scoped>
header {
  position: fixed;
  padding-top : 24px;
  padding-left: 132px;
  width: 100%;
  background-color: black;
  z-index: 10;
}

header nav {
  transition: all 0.3s;
}

header h1{
  position: fixed;
  top:50%;
  left:24px;
  transition: font-size 0.2s ease-out;
  margin: 0;
  font-family: 'oldLondon';
}

header a {
  line-height: 48px;
  font-size: 24px;
  margin-top: 6px;
  margin-right: 16px;
  display: inline-block;
}
</style>