<template>
	<div id="infographic">
		<!-- <Map /> -->
		<Header id="header" />
		<Default />
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

<style>
#infographic {
	background-color: #2c2c2c;
}
#header {
	margin-bottom: 20px;
}
</style>
