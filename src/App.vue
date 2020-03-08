<template>
	<div id="app">
		<Infographic />
		<Buttons />
	</div>
</template>

<script>
import Infographic from './components/infographic/Infographic'
import Buttons from './components/buttons/Buttons'

// import state from './assets/state'
import { state, setBottle } from './assets/state.new'

export default {
	name: 'App',
	components: {
		Infographic,
		Buttons,
	},
	computed: {
		setBottle() {
			return setBottle
		},
	},
	created() {
		this.setBottle()
	},
}
</script>

<style>
body {
	overflow: hidden;
}
#app {
	width: 1920px;
	height: 1080px;
}
* {
	padding: 0;
	margin: 0;
}
@font-face {
	font-family: 'Poppins Regular';
	src: local('../static/fonts/Poppins-Regular.ttf');
}
@font-face {
	font-family: 'Poppins Italic';
	src: local('../static/fonts/Poppins-Light.ttf');
}
@font-face {
	font-family: 'Poppins Bold';
	src: local('../static/fonts/Poppins-Bold.ttf');
}
@font-face {
	font-family: 'Playfair Display Regular';
	src: local('../static/fonts/PlayfairDisplay-Regular.ttf');
}
@font-face {
	font-family: 'Playfair Display Italic';
	src: local('../static/fonts/PlayfairDisplay-Italic.ttf');
}
@font-face {
	font-family: 'Playfair Display Bold';
	src: local('../static/fonts/PlayfairDisplay-Bold.ttf');
}
.capitalize {
	text-transform: capitalize;
}
.uppercase {
	text-transform: uppercase;
}
</style>
