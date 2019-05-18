<template>
	<main class="app-page" :class="storeState.navActive ? 'nav-is-active' : '' ">
		<Home />
		<Resume />
		<Person />
	</main>
</template>

<script>
import { store } from '../store';

import Home from '../pages/Home.vue'
import Resume from '../pages/Resume.vue'
import Person from '../pages/Person.vue'

export default {
	name: 'Page',
	data() {
		return {
			storeState: store.state
		}
	},
	components: {
		Home,
		Resume,
		Person
	}
}
</script>
<style lang="scss" scoped>
@import '../scss/variables';
@import '../scss/mixins';

.app-page {
	display: block;
	position: relative;
	background: $white;
	min-height: calc(100vh - 3.5rem );
	margin-top: .5rem;
	left: 0;
	transition: .5s all ease-in-out;
	&.nav-is-active {
		left: -200px;
	}
	@include breakpoint-min(md) {
		width: calc(100% - 240px);
		left: 0 !important;
	}
}
</style>