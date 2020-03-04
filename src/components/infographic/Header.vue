<template>
	<div id="header">
		<h1 class="vino capitalize">
			{{ values[bottleProp].vino }}
		</h1>
		<h3 class="produttore capitalize">
			{{ values[bottleProp].produttore }}
		</h3>
	</div>
</template>

<script>
import defaultViewValues from '../../../static/data/defaultViewValues.json'

export default {
	name: 'Header',
	props: {
		bottleProp: Number,
	},
	data() {
		return {
			// bottleData: this.bottleProp,
			values: defaultViewValues,
		}
	},
}
</script>

<style scoped>
.produttore {
	font-family: 'Playfair Display Bold';
	font-style: italic;
	color: #c2c2c2;
}
.vino {
	font-family: 'Playfair Display Italic';
	color: #b14d74;
}
</style>
