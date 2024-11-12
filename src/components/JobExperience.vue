<template>
	<div class="container">
	<h2>{{experience.company}}</h2>
	<ul>
		<li v-for="(task, idx) in experience.tasks" :key="idx">
			{{task}}
		</li>
	</ul>
		<h3 style="border-bottom: solid 1px; width: fit-content;">Technologies</h3>
	
	<div style="display: flex; flex-wrap: wrap;">
		<template v-for="tech in experience.stack" :key="tech">
			<div style="display: flex; align-items: center;">
			<img src="@/assets/svg/royal.svg" style="width: 16px">
			<span>{{tech}}</span>
			</div>
		</template>
	</div>
	</div>
</template>
<script setup>
import HiddenSVG from "./HiddenSVG.vue"
const props = defineProps(['experience'])
</script>
<style scoped>
h2 { 
	color: #d26913;
	border-bottom: solid 1px;
	width: fit-content;
}
h3 {
	display: inline-block;
	margin: 0;
	margin-bottom: 8px;
}
.container {
	position: absolute;
	padding-right: 24px;	
}
li {
	font-size: 18px;
	margin-bottom: 8px;
}
span {
	margin: 8px;
	font-size: 16px;
	background-color: #5c6f46;
	color:black;
	padding: 4px;
	border-radius: 5px;
}
</style>