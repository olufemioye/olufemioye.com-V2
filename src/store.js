export const store = {
	state: {
		navActive: false,
		currentPage: 'Home'
	},
	toggleNav() {
		this.state.navActive = !this.state.navActive
	},
	closeNav() {
		this.state.navActive = false;
	}
}