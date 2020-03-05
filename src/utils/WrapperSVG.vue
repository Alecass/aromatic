<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		:id="id"
	>
		<title>{{ title }} icon</title>

		<slot />
	</svg>
</template>

<script>
export default {
	name: 'Circles',
	props: {
		id: String,
		title: String,
		width: String,
		height: String,
	},
}
</script>

<style>
.cls-1 {
	opacity: 0.6;
}
.cls-2 {
	fill: none;
	stroke: #fff;
	stroke-miterlimit: 10;
	stroke-width: 1.69px;
	stroke-dasharray: 269.65 449.42;
}
</style>
