<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		:id="id"
	>
		<slot />
	</svg>
</template>

<script>
export default {
	name: 'Circles',
	props: {
		id: String,
		width: String,
		height: String,
	},
}
</script>
