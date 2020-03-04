<template>
	<div id="app">
		<input type="number" id="bottle" />
		<Infographic :bottleProp="currentBottle" />
	</div>
</template>

<script>
import Infographic from './components/infographic/Infographic'

import state from './assets/state'

export default {
	name: 'App',
	components: {
		Infographic,
	},
	mounted() {
		document.querySelector('#bottle').addEventListener('click', e => {
			let bottle = e.target.value

			if (bottle >= 0 && bottle <= 6) state.setBottle(bottle)
			else return

			console.log(state.getBottle())
		})
	},
	data() {
		return {
			currentBottle: 0,
		}
	},
}
</script>

<style>
* {
	padding: 0;
	margin: 0;
}
@font-face {
	font-family: 'Poppins Regular';
	src: url('../static/fonts/Poppins-Regular.ttf') format('ttf');
}
@font-face {
	font-family: 'Poppins Italic';
	src: url('../static/fonts/Poppins-Light.ttf') format('ttf');
}
@font-face {
	font-family: 'Poppins Bold';
	src: url('../static/fonts/Poppins-Bold.ttf') format('ttf');
}
@font-face {
	font-family: 'Playfair Display Regular';
	src: url('../static/fonts/PlayfairDisplay-Regular.ttf') format('ttf');
}
@font-face {
	font-family: 'Playfair Display Italic';
	src: url('../static/fonts/PlayfairDisplay-Italic.ttf') format('ttf');
}
@font-face {
	font-family: 'Playfair Display Bold';
	src: url('../static/fonts/PlayfairDisplay-Bold.ttf') format('ttf');
}
.capitalize {
	text-transform: capitalize;
}
.uppercase {
	text-transform: uppercase;
}
</style>
