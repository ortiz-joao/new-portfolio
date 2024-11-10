<template>
    <div class="experience" @mouseenter="hover = true" @mouseleave="hover = false">
        <p style="text-align: start">{{experience.company}}</p>
        <p style="text-align: center">{{experience.start}}</p>
        <p style="text-align: end">{{experience.end}}</p>
        <Transition name="down-up">
            <div v-if="hover" class="background"></div>
        </Transition>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const hover = ref(false)

defineProps(['experience'])
</script>
<style scoped>
.experience {
	display: grid;
	grid-template-columns: repeat(3, 1fr); 
	margin: 0;
	position: relative;
	overflow: hidden;
	font-size: 24px;
	height: 64px;
	border-top: solid 1px #d26913;
	width: 400px;
	cursor: pointer;
    padding: 0 8px;
	color: #d26913;
}

.experience:last-of-type{
	border-bottom: solid 1px #d26913;
}

.background {
	height: 64px;
	width: 100%;
	position: absolute;
	transition: all 0.3s;
	background-color: #252525;
	z-index: -1;
}

.down-up-enter-active,
.down-up-leave-active {
	transition: all 0.2s ease-in;
}

.down-up-enter-to,
.down-up-leave-from {
	transform: translateY(0%)
}

.down-up-enter-from {
	transform: translateY(-100%);
}

.down-up-leave-to {
	transform: translateY(100%);
}
</style>