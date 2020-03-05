<template>
	<div id="app">
		<Infographic />
	</div>
</template>

<script>
import Infographic from './components/infographic/Infographic'

import { state } from './assets/state'

export default {
	name: 'App',
	components: {
		Infographic,
	},
	created() {
		state.setBottle()
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
