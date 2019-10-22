<template>
	<div class="flex flex-row-reverse">
		<div
			class="text-white text-xl px-10 py-6 uppercase cursor-pointer"
			@click="goToPage(route.name)"
			v-for="(route, ix) in routes"
			:key="ix"
		>{{route.title}}</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		routes: [
			{
				title: "Sign up",
				name: "main.sign-up"
			},
			{
				title: "Login",
				name: "main.login"
			},
			{
				title: "TV Shows",
				name: "main.tv-shows"
			},
			{
				title: "Movies",
				name: "main.movies"
			},
			{
				title: "Home",
				name: "main.home"
			}
		]
	}),
	methods: {
		goToPage(routeName) {
			this.$router.push({ name: routeName });
		}
	}
};
</script>