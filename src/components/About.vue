<template>
	<section style="height: 100vh">
		<HiddenSVG src="/src/assets/svg/ornament_v.svg" style="height: 40vh;"/>
		<article class="about">
			<h2>About me</h2>
			<p>
				Passionate and Frontend developer with 5+ years of experience. Specialized in Vue.js, HTML5, CSS3, and JavaScript (ES6+), with strong problem solving skills and, understanding of responsive design and user-centered practices.
			</p>
			<TransitionGroup name="slide" mode="out-in">
				<template v-for="(experience, idx) in experiences" :key="idx">
				<JobExperience  v-if="current === idx" :experience="experience"/>
				</template>
			</TransitionGroup>
			</article>
		<div style="margin-left: auto;padding-right: 64px; position: relative; height: fit-content;">
			<h2 style="color: #d26913; font-size: 28px; margin: 0;margin-bottom: 8px; border-bottom: solid 2px #d26913;">Job Experiences</h2>
			<Experience v-for="(exp, idx) in experiences" :experience="exp" :key="idx" @click="current = idx">
			</Experience>
			<HiddenSVG src="/src/assets/svg/ornament_bottom-left.svg" style="position: absolute; bottom:-30%;right: 0; height: 250px" svgStyle="transform: scaleX(-1);"/>
		</div>
	</section>
</template>
<script setup>
import { ref,TransitionGroup } from 'vue'
import JobExperience from './JobExperience.vue';
import Experience from './Experience.vue';
import HiddenSVG from './HiddenSVG.vue';

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
section {
	display: flex;
	flex-direction: row;
	position: relative;
}

.about {
	width: 720px;
	padding: 24px;
	position: relative;
	box-sizing: border-box;
	border: solid 1px #5c6f46;
	overflow: hidden;
}

.about h2 {
	font-size:36px;
	color: #d26913;
	margin: 0;
	margin-bottom: 8px;
	border-bottom: solid 2px;
}

.about p {
	font-size: 20px;
}


.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

</style>
