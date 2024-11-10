<template>
	<div class="container">
	<h2>{{experience.company}}</h2>
	<ul>
		<li v-for="(task, idx) in experience.tasks" :key="idx">
			{{task}}
		</li>
	</ul>
	<div style="display: flex; flex-direction: row; align-items: center">
		<h3>Technologies</h3>
		<HiddenSVG src="/src/assets/svg/silver.svg" style="height: 64px;" svgStyle="transform: scale(1.2)"/>
	</div>
	
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
}
h3 {
	display: inline-block;
	margin: 0;
	margin-bottom: 8px;
}
.container {
	position: absolute
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