<template>
	<div id="infographic">
		<Map />
		<Header id="header" />
		<Default id="default" v-if="show" />
		<Widget id="widget" v-else />
	</div>
</template>

<script>
import Map from './Map'
import Header from './Header'
import Default from './descriptions/Default'
import Widget from './descriptions/Widget'

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
			show: true,
		}
	},
	mounted() {
		window.addEventListener('keypress', e => {
			this.checkIfNaN(e.key)
		})
	},
	methods: {
		checkIfNaN: function(value) {
			if (!isNaN(value)) {
				// mostro header
				this.show = true
			} else {
				// mostro widget
				this.show = false
			}
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
