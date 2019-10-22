<template>
	<div class="home flex h-screen">
		<div :class="bg" />
		<div class="bg-darken" />
		<div class="main-body">
			<div class="absolute right-0 mr-16">
				<nav-bar />
			</div>

			<div class="flex flex-col justify-center h-full">
				<div>
					<router-view />
				</div>
				<terms-button />
			</div>
		</div>
	</div>
</template>

<script>
import TermsButton from "./../components/TermsButton";
import NavBar from "./../components/NavBar";

export default {
	components: {
		NavBar,
		TermsButton
	},
	computed: {
		bg() {
			let res;
			if (this.$route.name === "main.home") {
				res = "bg-darken";
			} else {
				res = "bg-darken-deep";
			}
			return res;
		}
	}
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
		&-deep {
			@extend .bg-darken;
			background: linear-gradient(
				270deg,
				#333333 39.72%,
				rgba(51, 51, 51, 0) 83.09%
			);
			opacity: 1;
		}
	}

	.main-body {
		position: relative;
		z-index: 10;
	}
}
</style>