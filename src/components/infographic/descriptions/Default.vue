<template>
	<div id="default">
		<div v-for="(title, index) in titles" :key="index">
			<h5 class="uppercase title">{{ title }}</h5>
		</div>
		<!-- <div v-for="(value, index) in titles.length" :key="index">
			<h3 class="capitalize value">
			{{ values[].cantina }}
		</h3> -->

		<h3 class="capitalize value">
			{{ values[currentBottle].cantina }}
		</h3>
		<h3 class="capitalize value">
			{{ values[currentBottle].anno }}
		</h3>
		<h3 class="capitalize value">
			{{ values[currentBottle].gradazione }}
		</h3>
		<h3 class="capitalize value">
			{{ values[currentBottle].vitigno }}
		</h3>
	</div>
</template>

<script>
import defaultViewValues from '../../../../static/data/defaultViewValues.json'
import defaultViewTitles from '../../../../static/data/defaultViewTitles.json'

import state from '../../../assets/state'

export default {
	name: 'Default',
	data() {
		return {
			currentBottle: state.getBottle(),
			titles: defaultViewTitles,
			values: defaultViewValues,
		}
	},
}
</script>

<style>
#default {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.title {
	font-family: 'Poppins Light';
	font-weight: 100;
	color: rgb(169, 169, 169);
}
.value {
	font-family: 'Playfair Display Bold';
	color: rgb(232, 232, 232);
}
</style>
