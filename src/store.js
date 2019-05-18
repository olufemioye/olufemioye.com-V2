export const store = {
	state: {
		navActive: false,
		activePage: 'Home'
	},
	toggleNav() {
		this.state.navActive = !this.state.navActive
	}
}