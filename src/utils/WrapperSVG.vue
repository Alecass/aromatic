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
