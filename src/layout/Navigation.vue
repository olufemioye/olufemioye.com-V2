<template>
	<div class="app-navigation">
		<header class="app-header">
			<div class="app-logo">Olufemi Oye.</div>
			<button class="navigation-menu" @click="toggleNav()" :class="storeState.navActive ? 'is-active' : '' ">
				<span class="navigation-menu__lines"></span>
			</button>
		</header>

		<div class="app-navigation__sidebar"
				:class="storeState.navActive ? 'is-active' : '' ">

			<nav class="app-nav">
				<a class="app-nav__link" v-for="link in pageLinks" 
					:key="link.id" 
					:href="link.link">{{ link.name }}</a>
			</nav>

			<footer class="app-footer">
				<div class="app-footer__social">
					<a class="social-link" target="_blank"
						v-for="social in socialLinks"
						:href="social.link"
						:key="social.id">
						<i :class="social.class"></i>
					</a>
				</div>
				<div class="app-footer__stamp">
					@{{ currentYear() }} <br>
					Made in Lagos.
				</div>

			</footer>
		</div>
	
	</div>
</template>
<script>
import { store } from '../store';
export default {
	name: 'Navigation',
	data() {
		return {
			storeState: store.state,
			pageLinks: [
				{
					name: 'Home',
					link: '/'
				},
				{
					name: 'Resume',
					link: '/resume'
				},
				{
					name: 'Person',
					link: '/person'
				}
			],
			socialLinks: [ 
				{
					class: 'fab fa-dribbble',
					link: 'https://dribbble.com/olufemi'
				},
				{
					class: 'fab fa-github',
					link: 'https://github.com/olufemioye'
				},
				{
					class: 'fab fa-twitter',
					link: 'https://twitter.com/OlufemiOye'
				},
				{
					class: 'fab fa-instagram',
					link: 'https://www.instagram.com/olufemioye/'
				},
				{
					class: 'fab fa-linkedin',
					link: 'https://www.linkedin.com/in/olufemioye/'
				},
				{
					class: 'fab fa-medium',
					link: 'https://medium.com/@olufemi.oye'
				}	
			]
		}
	},
	methods: {
		currentYear() {
			return new Date().getFullYear();
		},
		toggleNav() {
			store.toggleNav();
		}
	}
}
</script>
<style lang="scss" scoped>
	@import '../scss/variables';
	@import '../scss/mixins';

	.app-navigation {
		display: flex;
		flex-direction: column;
	}
	.app-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		@include breakpoint-min(md) {
			position: fixed;
			top: 1.5rem;
			right: 3.75rem;
			width: 5.625rem;
			text-align: right;
		}
	}
	.app-logo {
		display: inline-block;
		color: white;
		font-weight: $font-weight-medium;
		font-size: 1.125rem;
		@include breakpoint-min(md) {
			font-size: 1.5rem;
			line-height: 2rem;
		}
	}
	.navigation-menu {
		display: flex;
		position: relative;
		height: 2rem;
		width: 2.25rem;
		background: rgba($white, .05);
		border: none;
		outline: none;
		padding: .5rem .375rem;
		@include breakpoint-min(md) {
			display: none
		}

		&.is-active {
			.navigation-menu__lines {
				width: 0;
				background: rgba($white, 0);
				
				&::before, &::after {
					top: 50%;
					left: 50%;
				}
				&::before {
					transform: rotate(45deg) translate(-50%);
					transform-origin: top left;
				}
				&::after {
					transform: rotate(-45deg) translate(-50%);
					transform-origin: bottom left;
				}
			}
		}
	}
	.navigation-menu__lines {
		display: block;
		width: 1.5rem;
		height: .125rem;
		border-radius: .0625rem;
		background: $white;

		&::before, &::after {
			content: '';
			position: absolute;
			display: block;
			width: 1.5rem;
			height: .125rem;
			border-radius: .0625rem;
			background: $white;
			transition: inherit;
		}
		&::before {
			top: .5rem;
		}
		&::after {
			bottom: .5rem;
		}
	}
	.app-navigation__sidebar {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: fixed;
		width: 200px;
		height: calc(100vh - 3.5rem);
		top: 3rem;
		right: -200px;
		text-align: right;
		overflow: auto;
		transition: .5s all ease-in-out;
		&.is-active {
			right: 0
		}
		@include breakpoint-min(md) {
			width: 240px;
			right: 0;
			top: 5.5rem;
			height: calc(100vh - 7rem);
		}
	}
	.app-nav {
		margin-top: 3.25rem;
		@include breakpoint-min(md) {
			margin-top: 5rem;
		}
	}
	.app-nav__link {
		display: inline-block;
		position: relative;
		margin-bottom: 1.5rem;
		padding: 1rem 2.5rem;
		line-height: 1.25rem;
		font-size: 1rem;
		font-weight: $font-weight-normal;
		text-transform: uppercase;
		text-decoration: none;
		letter-spacing: 1px;
		color: $theme-accent;
		transition: .3s ease-in-out;
		&:hover {
			color: $white;
		}
		@include breakpoint-min(md) {
			padding: 1rem 3.75rem;
		}

		&.is-active {
			color: $white;
			&::after {
				content: '';
				display: block;
				position: absolute;
				right: 0;
				top: .625rem;
				height: 2rem;
				width: .25rem;
				background: $white;
			}
		}
	}
	.app-footer {
		padding: 0 2.5rem;
		@include breakpoint-min(md) {
			padding: 0 3.75rem;
		}
	}
	.app-footer__social {
		display: grid;
		grid-template-columns: repeat(2, 1.5rem);
		grid-gap: 2rem;
		justify-items: end;
		width: 2.5rem;
		margin: 0 auto 2.5rem;
		@include breakpoint-min(md) {
			margin-bottom: 3.75rem
		}
	}
	.social-link {
		color: $white;
		display: inline-block;
		font-size: 1.5rem;
	}
	.app-footer__stamp {
		color: $theme-accent;
		line-height: 1.5;
		font-size: 1rem;
		font-weight: $font-weight-normal;
	}
</style>