<script setup>
import useIntersectionObserver from '@/composables/intersectionObserver';
import { useTemplateRef } from 'vue';

defineProps(['src','svgStyle'])

const svgRef = useTemplateRef('svg-cover')

function svgVisible(observerEntry) {
	if(observerEntry.isIntersecting) {
		observerEntry.target.classList.add("on-visible-animation")
	}
}

useIntersectionObserver(svgRef, svgVisible, 1)
</script>
<template>
    <div class="hidden-svg">
			<img :src :style="svgStyle">
			<div ref="svg-cover" class="cover"></div></div>
        </template>
        <style scoped>
.hidden-svg {
	z-index: -1;
    overflow: hidden;
    position: relative;
}

.hidden-svg img {
	height: 100%;
	z-index: -1;
}

.cover {
	height: 100%;
	width: 100%;
	background: black;
	position: absolute;
	left: 0;
	top: 0;
	transform: translateY(0);
	transition: all 1s ease-out;
}

.on-visible-animation {
	transform: translateY(100%);
}</style>