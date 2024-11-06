<template>
	<section style="height: 100vh">
		<article>
			<h2>About me</h2>
			<p>
				Passionate and Frontend developer with 5+ years of experience. Specialized in Vue.js, HTML5, CSS3, and JavaScript (ES6+), with strong problem solving skills and, understanding of responsive design and user-centered practices.
			</p>
			<transition name="slide" mode="out-in">
			</transition>
			<JobExperience :key="current" :experience="experiences[current]"/>
		</article>
		<div>
			<h2>Experience</h2>
			<div  class="experience"v-for="({company, start, end}, idx) in experiences" :key="idx" @click="current = idx">
				<p>{{company}}</p>
				<p>{{start}}</p>
				<p>{{end}}</p>
				<div class="background"></div>
			</div>
		</div>
	</section>
</template>
<script setup>
import { ref } from 'vue'
import JobExperience from '../components/JobExperience.vue';

const experiences = ref([
	{
		company: 'Freelancer',
		start: 'Jun 2024',
		end: 'Present',
		stack: [
			'JavaScript',
			'HTML',
			'CSS',
			'Axios',
			'Nuxt3',
			'Medusa.js',
			'Stripe.js',
			'Tailwind.css',
			'Postgres',
			'Cypress',
			'i18n',
		],
		tasks: [
			'Developed a Nuxt.js storefront with hybrid rendering strategies to improve SEO and performance.',
			'Integrated the Medusa backend RESTful API and Stripe.js elements.',
			'Utilized VueUse Core modules to speed up development and create optimized, smooth experiences.',
			'Automated testing using Vitest and Cypress.',
			'Implemented website localization using i18n and integrated the Google Places API.'
		]
	},
	{
		company: 'Fyld',
		start: '2022',
		end: '2024',
		stack: [
			'JavaScript',
			'TypeScript',
			'HTML',
			'CSS',
			'Axios',
			'Vue.js 2 & 3',
			'Vue CLI',
			'Vuetify',
			'React.js',
			'Tailwind.css',
			'Chart.js',
			'Stripe.js',
			'D3.js',
			'Jest',
			'Cypress'
		],
		tasks: [
			'Integrated a Vue.js 2 SaaS application into a RESTful JSON API with Axios and utilized Vuex for optimal global state management.',
			'Optimized Vue.js components and refactored code using well-known design patterns to improve readability, reusability, and performance.',
			'Implemented automated testing strategies with Jest, Vue Test Utils, and Cypress.',
			'Collaborated with UI/UX designers and utilized a Vue.js 3, TypeScript, and TailwindCSS tech stack to deliver a responsive, smooth application.',
			'Used Chart.js to create interactive charts with real-time data.',
			'Implemented smooth animations between pages and layouts.',
			'Worked with Docker in a containerized environment utilizing VS Code WSL2 and GitHub Actions for CI/CD.',
		]
	},
	{
		company: 'IndexLabs',
		start: '2018',
		end: '2020',
		stack: [
			'JavaScript',
			'Axios',
			'Vue.js 2',
			'Vuetify',
			'CSS',
			'HTML',
			'Jest',
			'Firebase',
		],
		tasks: [
			'Designed and implemented responsive layouts using HTML5, CSS, and JavaScript with a focus on user experience.',
			'Worked with CSS preprocessors (SASS/LESS) to streamline styling processes and maintain design consistency.',
			'Assisted the lead developer with frontend development on multiple small Vue.js 2 web applications, ensuring consistent and engaging user interfaces by using component libraries like Vuetify.js.',
			'Integrated Vue.js applications into RESTful APIs with Axios.js.'
		]
	}
])

const current = ref(0)
</script>
<style scoped>
.experience {
	display: grid;
	grid-template-columns: repeat(3, 120px); 
	margin: 0;
	position: relative;
	overflow: hidden;
	font-size: 22px;
	height: 48px;
	border-top: solid 1px white;
	width: 360px;
	cursor: pointer;
}

.experience:last-of-type{
	border-bottom: solid 1px white;
}

 .background {
	height: 64px;
	width: 100%;
	position: absolute;
	top: 64px;
	transition: all 0.3s ease-in-out;
	background-color: aliceblue;
	z-index: -1;
}
.experience:hover .background {
	top: 0;
}
</style>
