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
import { inject, ref } from 'vue'

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
      style.value.fontSize = '32px'
      navStyle.value.opacity = '1'
    } else {
      navStyle.value.opacity = '0'
      style.value.fontSize = '72px'
      style.value.transform =  `translateY(${offsetY}px)`
    }
  }
}

const lenis = inject('lenis')

lenis.on('scroll',onScroll);

</script>
<style scoped>
header {
  position: fixed;
  top : 24px;
  left: 120px;
}

header nav {
  transition: all 0.3s;
}

header h1{
  position: fixed;
  top:50%;
  left:32px;
  transition: font-size 0.2s ease-out;
  margin: 0;
}

header a {
  line-height: 32px;
  margin-right: 16px;
}
</style>