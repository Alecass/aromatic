<template>
	<div id="header">
		<h1 class="vino capitalize">
			{{ values[bottle].vino }}
		</h1>
		<h3 class="produttore capitalize">
			{{ values[bottle].produttore }}
		</h3>
	</div>
</template>

<script>
import defaultViewValues from '../../../static/data/defaultViewValues.json'

import { manager } from '../../assets/state'

export default {
	name: 'Header',
	data() {
		return {
			bottle: 0,
			values: defaultViewValues,
		}
	},
	mounted() {
		window.addEventListener('keypress', e => {
			let key = Number(e.key)

			if (key >= 0 && key <= 6) {
				this.bottle = manager.getBottle()
			} else return

			console.log('HEADER', manager.getBottle())
		})
	},
}
</script>

<style scoped>
.vino {
	font-family: 'Playfair Display Italic';
	color: #b14d74;
	font-size: 3rem;
	line-height: 2.5rem;
}
.produttore {
	font-family: 'Playfair Display Bold';
	font-weight: 100;
	font-style: italic;
	color: #c2c2c2;
	font-size: 1.5rem;
}
</style>
