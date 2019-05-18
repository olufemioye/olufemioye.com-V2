<template>
	<div class="resume-timeline">
		<div class="timeline-logo">
			<img :src="logoSrc" :alt="logoAlt">
		</div>
		<div class="timeline-info">
			<h4 class="timeline-role"> {{ role }} </h4>
			<h5 class="timeline-org"> {{ company }} </h5>
			<p class="timeline-date"> {{ date }} </p>
		</div>
	</div>	
</template>

<script>
export default {
	name: 'ResumeTimeline',
	props: [ 'logoSrc', 'logoAlt', 'role', 'company', 'date' ]
}
</script>

<style lang="scss" scoped>
	@import '../scss/variables';

	.resume-timeline {
		display: flex;
		margin-bottom: 2rem;
	}
	.timeline-logo {
		height: 3rem;
		width: 3rem;
		margin-right: 1rem;
		text-align: center;
		img {
			height: 100%;
			width: auto;
			display: block;
		}
	}
	.timeline-role {
		font-size: 1.25rem;
		font-weight: $font-weight-light;
		line-height: 1.5rem;
		color: $theme-color;
		margin: 0 0 .25rem;
	}
	.timeline-org {
		font-size: 1rem;
		font-weight: $font-weight-normal;
		line-height: 1.25rem;
		margin: 0 0 .5rem;
	}
	.timeline-date {
		font-size: 1rem;
		font-weight: $font-weight-light;
		color: $grey;
		line-height: 1.25rem;
		margin: 0;
	}
</style>
