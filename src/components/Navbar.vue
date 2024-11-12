<template>
	<header ref="header">
    <h1 :style ref="h1">Ortiz</h1>
    <div :style="navStyle" style="display: flex; ">
      <div class="divider-container" style="width: calc(100% - 220px); margin-left: 110px;">
        <img src="/src/assets/svg/royal.svg">
        <div></div>
      </div>
      <nav>
        <a>Intro</a>
        <a>About</a>
        <a>Work</a>
      </nav>
      <div class="divider-container">
        <div></div>
        <img src="/src/assets/svg/royal2.svg">
      </div>
    </div>
  </header>
</template>
<script setup>
import { inject, ref, onMounted } from 'vue'

const h1 = ref(null)

const header = ref(null)

const style = ref({
  transform: '',
  fontSize: '72px',
})

const navStyle = ref({
  opacity: '0',
  transition: 'all 0.3s'
})


const onScroll = ({scroll}) => {
  if( h1.value ) {
    const offsetY = Math.max(-scroll, -window.innerHeight + h1.value.clientHeight)
    if(offsetY < (-window.innerHeight/2 + 12)) {
      style.value.fontSize = '48px'
      navStyle.value.opacity = '1'
      header.value.style.background = "#252525"
      style.value.transform = `translateY(${-window.innerHeight/2 + 12}px)`
    } else {
      navStyle.value.opacity = '0'
      header.value.style.background = "none"
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
.divider-container{
  display: flex;
  width: 100%;
  padding: 0 4px;
  align-items: center;
}

.divider-container img {
  height: 32px;
  width: auto;
  margin: 0 12px;
}

.divider-container div {
  border-bottom: solid 2px #5c6f46;
  width: 100%;
  height: 1px;
}

header {
  position: fixed;
  padding-top : 24px;
  padding-bottom: 4px;
  width: 100%;
  background-color: black;
  z-index: 10;
}

header nav {
  margin: 0 auto;
  width: fit-content;
  display: flex;
  flex-direction: row;
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
  margin: 0 8px;
  display: inline-block;
}
</style>