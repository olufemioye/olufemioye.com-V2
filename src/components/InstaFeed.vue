<template>
	<section class="insta-feed">
		<h4 class="subheading-text">Latest from my Instagram</h4>
		<div class="insta-feed__wrap">
			<a v-for="ig in instaData"
				:key="ig.id" 
				:href="ig.link" 
				class="insta-post" 
				target="_blank" title="View on Instagram">
				<div class="insta-post__img">
					<img :src="ig.images.standard_resolution.url" :alt="ig.caption.text">
				</div>
				<p class="insta-post__caption body-text text-dark">{{ ig.caption.text }}</p>
			</a>
			
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
		&::-webkit-scrollbar {
			width: 0;
		}

		@include breakpoint-min(md) {
			margin: 0;
			padding: .75rem;
			display: grid;
			grid-template-columns: repeat(3, 33.333%);
		}
	}
	.insta-post {
		flex: 0 0 auto;
		width: 16.5rem;
		height: auto;
		margin-right: 1rem;
		background: $white;
		text-decoration: none;
		box-shadow: .125rem .125rem .125rem rgba($black, .08);
		transition: .3s ease-in-out all;

		&:hover {
			box-shadow: .25rem .25rem .5rem rgba($black, .12);
			transform: translateY(-.25rem);

			.insta-post__img {
				filter: grayscale(1)
			}
		}

		@include breakpoint-min(md) {
			width: auto;
			margin: .75rem;
		}
	}
	.insta-post__img {
		width: 100%;
		height: auto;
		background: $snow;
		transition: inherit;
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
