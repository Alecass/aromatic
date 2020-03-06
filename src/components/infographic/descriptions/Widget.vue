<template>
	<div id="widget">
		<h1>Vino: {{ bottle }} - Bottone: {{ button }}</h1>
	</div>
</template>

<script>
import state from '../../../assets/state'

export default {
	name: 'Widget',
	data() {
		return {
			bottle: state.watchBottle(),
			button: state.watchButton(),
		}
	},
	mounted() {
		window.addEventListener('keypress', e => {
			this.bottle = state.watchBottle()
			this.button = state.watchButton()
		})
	},
}
</script>

<style scoped>
h1 {
	color: white;
}
</style>
