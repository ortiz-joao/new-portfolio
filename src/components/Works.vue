<template>
	<div @click="show = !show">
		<HiddenSVG src="/src/assets/svg/diamond.svg" style="width: 300px; margin: 0 auto;"/>
		<transition name="fade">
			<div v-show="show">
				<h2>{{title}}</h2>
				<p>
					{{description}}
				</p>
				<div>
					<span v-for="tech in stack" :key="tech">
						{{tech}}
					</span>
				</div>
			</div>
		</transition>
	</div>
</template>
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>