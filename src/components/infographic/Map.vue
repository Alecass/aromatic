<template>
	<div id="map">
		<WrapperSVG id="circles" title="circles" width="100" height="100"
			><Circles
		/></WrapperSVG>
	</div>
</template>

<script>
import WrapperSVG from '../../utils/WrapperSVG'
import Circles from '../../../static/svg/header/Circles'

export default {
	name: 'Map',
	components: {
		WrapperSVG,
		Circles,
	},
}
</script>
