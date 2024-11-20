<template>
  <TresCanvas window-size preset="realistic">
    <TresPerspectiveCamera><TresPerspectiveCamera :position=[rotation,2,4] /> <TresDirectionalLight :position="[-10, 1, 5]" :intensity="0.5" cast-shadow /><Suspense><GLTFModel path="/angel.glb" /></Suspense></TresPerspectiveCamera>
  </TresCanvas>
</template>
<script setup>
import { TresCanvas } from '@tresjs/core';
import { GLTFModel } from '@tresjs/cientos'
import { inject, ref } from 'vue'

const rotation = ref(0)

const onScroll = ({scroll}) => {
  const pos = 0 - (scroll * 0.001)
  rotation.value = pos
}

const lenis = inject('lenis')

lenis.on('scroll', onScroll)
</script>