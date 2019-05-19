<template>
	<section class="page-home page-section">
		<div class="page-container">
			<h1 class="title-text">Hello 👋🏾</h1>
			<h4 class="subheading-text">My name is Olufemi</h4>
			<div class="page-content text-grey">
				<p class="body-text">
					I am a Product Designer who codes. I enjoy building cool products that are intuitive and beautiful.
				</p>
				<p class="body-text">
					I live in Lagos, Nigeria and I currently work at <a href="https://www.reach.africa" class="line-link" target="_blank">REACH.africa</a>, building products that helps individuals and businesses do the best with their finances.
				</p>
				<p class="body-text">
					This website is a curation of my design work and resume, case studies and writings are coming soon. 
				</p>
			</div>

			<h1 class="title-text">Say Hello</h1>
			<div class="page-content text-grey">
				<p class="body-text">
					Want to talk about an idea, a product, or just to say hello? Please feel free to send me an email. Looking forward to hearing from you!
				</p>
				<a class="cta-link" href="mailto:olufemi.oye@gmail.com">olufemi.oye@gmail.com</a>
			</div>
		</div>
	</section>
</template>

<script>
import { store } from '../store'

export default {
	name: 'Home',
	mounted() {
		store.state.currentPage = 'Home';
	}
}
</script>

<style lang="scss" scoped>

</style>
