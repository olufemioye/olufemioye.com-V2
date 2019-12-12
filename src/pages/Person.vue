<template>
	<section class="page-person page-section" style="padding-bottom: 0" data-aos="fade-up">
		<div class="page-container">
			<h1 class="title-text">African Man</h1>
			<div class="page-content text-grey">
				<p class="body-text">
					Olufemi was born some twenty something years ago. I have spent most of my years in Lagos and Ibadan. I have a
					Bachelors in Engineering from Obafemi Awolowo Univerisity.
				</p>
				<p class="body-text">
					When I’m not designing I am basically just living and enjoying the simple things in life. I take my sleep and
					food pretty serious. I plan to add travel and art collection to this list.
				</p>
				<p class="body-text">
					I’m always listening to something, be it a playlist on Spotify, a fake woke podcast or my friends ranting
					about the life and times of the everyday Nigerian.
				</p>
			</div>

			<InstaFeed />
		</div>
	</section>
</template>

<script>
	import InstaFeed from '../components/InstaFeed.vue'
	import {
		store
	} from '../store'

	export default {
		name: 'Person',
		components: {
			InstaFeed
		},
		mounted() {
			store.state.currentPage = 'Person'
		},
		metaInfo: {
			title: 'About - Olufemi Oye',
			meta: [
				{ property: 'og:title', content: 'About - Olufemi Oye'
			}]

		}
	}
</script>

<style lang="scss" scoped>

</style>