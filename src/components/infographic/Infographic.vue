<template>
	<div id="infographic">
		<Map />
		<Header id="header" />
		<Default id="default" v-if="!show" />
		<Widget id="widget" v-else />
	</div>
</template>

<script>
import Default from './descriptions/Default'
import Widget from './descriptions/Widget'
import Header from './Header'
import Map from './Map'
import { state } from '../../assets/state.new'

export default {
	name: 'Infographic',
	components: {
		Map,
		Header,
		Default,
		Widget,
	},
	data() {
		return {
			show: false,
		}
	},
	computed: {
		button() {
			return state.button
		},
	},
	watch: {
		button: function() {
			this.show = true
			console.log(this.button)
		},
	},
}
</script>

<style scoped>
#infographic {
	position: absolute;
	right: 0;
	bottom: 0;
	width: 960px;
	height: 540px;
	background-color: rgb(10, 15, 25);
}
#header,
#default,
#widget {
	margin-left: 260px;
	margin-right: 0px;
	width: 550px;
}
#header {
	position: absolute;
	margin-top: 160px;
}
#default {
	position: absolute;
	margin-top: 245px;
}
#widget {
	position: absolute;
	margin-top: 245px;
}
</style>
