<template>
	<div id="infographic">
		<Map />
		<Header id="header" />
		<Default id="default" />
	</div>
</template>

<script>
import Map from './Map'
import Header from './Header'
import Default from './descriptions/Default'

export default {
	name: 'Infographic',
	components: {
		Map,
		Header,
		Default,
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
#default {
	margin-left: 250px;
	margin-right: 0px;
	width: 600px;
}
#header {
	position: absolute;
	margin-top: 160px;
}
#default {
	position: absolute;
	margin-top: 245px;
}
</style>
