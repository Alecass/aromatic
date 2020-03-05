<template>
	<div id="default">
		<div v-for="(title, index) in titles" :key="index">
			<h5 class="uppercase title">{{ title }}</h5>
			<h3 class="capitalize value">
				{{ values[bottle][title] }}
			</h3>
		</div>
	</div>
</template>

<script>
import defaultViewValues from '../../../../static/data/defaultViewValues.json'
import defaultViewTitles from '../../../../static/data/defaultViewTitles.json'

import { manager } from '../../../assets/state'

export default {
	name: 'Default',
	data() {
		return {
			bottle: 0,
			titles: defaultViewTitles,
			values: defaultViewValues,
		}
	},
	mounted() {
		window.addEventListener('keypress', e => {
			let key = Number(e.key)

			if (key >= 0 && key <= 6) {
				this.bottle = manager.getBottle()
			} else return

			console.log('DEFAULT', manager.getBottle())
		})
	},
}
</script>

<style>
#default {
	display: flex;
	flex-direction: row;
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
