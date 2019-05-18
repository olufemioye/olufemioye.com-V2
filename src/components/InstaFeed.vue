<template>
	<section class="insta-feed">
		<h4 class="subheading-text">Latest from my Instagram</h4>
		<div class="insta-feed__wrap">
			<div class="insta-post" v-for="ig in instaData" :key="ig.id">
				<div class="insta-post__img">
					<img :src="ig.images.standard_resolution.url" :alt="ig.caption.text">
				</div>
				<p class="insta-post__caption body-text">{{ ig.caption.text }}</p>
			</div>
			
		</div>
	</section>
</template>

<script>
const axios = require('axios');

export default {
	name: 'InstaFeed',
	data() {
		return {
			instaData: null
		}
	},
	mounted() {
		axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=302493035.1ea9abe.198193c9788a407fac71228a42c83124')
			.then( response => (this.instaData = response.data.data.slice(0,3) ) )
	}
}
</script>

<style lang="scss" scoped>
	@import '../scss/variables';
	@import '../scss/mixins';

	.insta-feed__wrap {
		display: flex;
		padding: 1.25rem 1rem;
		margin: {
			left: -1rem;
			right: -1rem;
		}
		background: rgba($snow, .25);
		overflow-x: scroll;

		@include breakpoint-min(md) {
			margin: 0;
			padding: 1.5rem;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 1.5rem;
		}
	}
	.insta-post {
		flex: 0 0 auto;
		width: 16.5rem;
		height: auto;
		margin-right: 1rem;
		background: $white;
		// box-shadow: 0 0 .25rem rgba($black, .08), .125rem .125rem .125rem rgba($black, .04);

		@include breakpoint-min(md) {
			width: auto;
			margin: 0;
		}
	}
	.insta-post__img {
		width: 100%;
		height: auto;
		background: $snow;
		img {
			width: 100%;
			display: block;
		}
	}
	.insta-post__caption {
		margin: 0;
		padding: .25rem .5rem;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
