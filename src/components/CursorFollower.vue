<script setup>
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue'

const svgRef = useTemplateRef('svg')

const cursorX = ref(0);
const cursorY = ref(0);
const svgX = ref(0);
const svgY = ref(0);

// Smoothness factor, lower values make it follow slower
const delayFactor = 0.5;

function updateCursorPosition(event) {
  
  cursorX.value = event.clientX;
  cursorY.value = event.clientY;
}

function animate() {
  svgX.value += (cursorX.value - svgX.value - 50) * delayFactor;
  svgY.value += (cursorY.value - svgY.value - 50) * delayFactor;
  requestAnimationFrame(animate);
}

onMounted(() => {
  window.addEventListener('mousemove', updateCursorPosition);
  animate();
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursorPosition);
});

defineExpose(svgRef)

</script>

<template>
    <img
    ref="svg"
    src="@/assets/svg/circle.svg"
      style="height: 100px;"
      :style="{ transform: `translate(${svgX}px, ${svgY}px)` }"
      class="cursor-follower"/>
</template>

<style scoped>
.cursor-follower {
  position: fixed;
  pointer-events: none;
  transition: transform 0.1s;
  will-change: transform;
}
</style>