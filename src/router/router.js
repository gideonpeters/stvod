import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	routes: [
		{
			path: "",
			component: () => import("./../views/layouts/BaseLayout"),
			children: [
				{
					path: "",
					name: "main.home",
					component: () => import("./../views/sections/Home")
				},
				{
					path: "movies",
					name: "main.movies",
					component: () => import("./../views/sections/Movies")
				},
				{
					path: "login",
					name: "main.login",
					component: () => import("./../views/sections/Log")
				}
			]
		}
	]
});
