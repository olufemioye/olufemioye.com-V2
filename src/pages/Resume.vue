<template>
	<section class="page-resume page-section">
		<div class="page-container">
			<h1 class="title-text">Startup Junkie</h1>
			<div class="page-content text-grey">
				<p class="body-text">
					I use design and code to create beautiful experiences and solve problems. As a user experience designer and frontend developer, I have worked on multiple projects over the years. 
				</p>
			</div>
			<h4 class="subheading-text">Experience</h4>
			<div class="page-content">
				<ResumeTimeline logoSrc="assets/img/reach.png" 
											logoAlt="REACH Logo"
											role="Product Designer"
											company="REACH Technologies Inc."
											date="Feb. 2018 - present" />
				<ResumeTimeline logoSrc="assets/img/insidify.png" 
											logoAlt="Insidify Logo"
											role="Frontend Developer"
											company="Insidify.com"
											date="Aug. 2016 - Feb. 2018" />
			
			</div>
			<div class="page-content">
				<h4 class="subheading-text">Education</h4>
				<ResumeTimeline logoSrc="assets/img/oau.jpg" 
											logoAlt="OAU Logo"
											role="Chemical Engineering"
											company="Obafemi Awolowo University"
											date="Class of 2016" />
			</div>
		</div>
	</section>
</template>

<script>
import ResumeTimeline from '../components/ResumeTimeline.vue';
import { store } from '../store'

export default {
	name: 'Resume',
	components: {
		ResumeTimeline
	},
	mounted () {
		store.state.currentPage = 'Resume'
	}
}
</script>

<style lang="scss" scoped>

</style>
