<template>
	<div class="home flex h-screen">
		<div class="bg-darken"></div>
		<div class="main-body">
			<div class="flex flex-row-reverse absolute right-0 mr-16">
				<div
					class="text-white text-xl px-10 py-6 uppercase cursor-pointer"
					v-for="(route, ix) in routes"
					:key="ix"
				>{{route.title}}</div>
			</div>

			<div class="flex flex-col justify-center h-full">
				<div
					class="text-white text-5xl px-64 font-semibold"
				>Get access to thousands of TV shows and movies on the go.</div>
				<div class="px-64 mt-5">
					<input type="text" placeholder="Search" class="movie-search text-2xl" />
				</div>
				<terms-button />
			</div>
		</div>
	</div>
</template>

<script>
import TermsButton from "./../components/TermsButton";
export default {
	components: {
		TermsButton
	},
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
	})
};
</script>

<style lang="scss" scoped>
.home {
	background-image: url("./../../assets/images/bg.png");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;
	margin: 0;
	padding: 0;
	z-index: 1;
	position: relative;

	.bg-darken {
		background: #222222;
		opacity: 0.4;
		height: 100vh;
		width: 100vw;
		position: absolute;
		z-index: 2;
	}

	.main-body {
		position: relative;
		z-index: 10;

		.movie-search {
			background: rgba(255, 255, 255, 0.8);
			box-shadow: -4px 4px 10px rgba(255, 255, 255, 0.1);
			border-radius: 8px;
			padding: 30px;
			width: 100%;
			&:active,
			:hover,
			:focus,
			.active {
				outline: none !important;
			}
		}
	}
}
</style>