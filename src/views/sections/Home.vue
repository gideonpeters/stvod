<template>
	<div>
		<div
			class="text-white text-5xl px-64 font-semibold"
		>Get access to thousands of TV shows and movies on the go.</div>
		<div class="px-64 mt-5">
			<input type="text" placeholder="Search" class="movie-search text-2xl" />
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
</style>