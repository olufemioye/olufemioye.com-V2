import Home from './pages/Home.vue'
import Resume from './pages/Resume.vue'
import Person from './pages/Person.vue'

export const routes = [
  { path: '/', component: Home },
	{ path: '/resume', component: Resume },
	{ path: '/person', component: Person }
]