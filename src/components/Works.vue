<template>
	<div @click="show = !show">
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