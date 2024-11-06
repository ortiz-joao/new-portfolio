<template>
	<h2>{{experience.company}}</h2>
	<ul>
		<li v-for="(task, idx) in experience.tasks" :key="idx">
			{{task}}
		</li>
	</ul>
	<div>
		<span v-for="tech in experience.stack" :key="tech">
			{{tech}}
		</span>
	</div>
</template>
<script setup>
const props = defineProps(['experience'])
</script>