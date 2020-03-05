<template>
	<div id="map">
		<WrapperSVG
			id="circles"
			title="circles"
			:width="String(sizeCircle)"
			:height="String(sizeCircle)"
			><Circles
		/></WrapperSVG>
		<WrapperSVG
			id="italia"
			title="italia"
			:width="String(sizeItalia)"
			:height="String(sizeItalia)"
			><Italia
		/></WrapperSVG>
	</div>
</template>

<script>
import WrapperSVG from '../../utils/WrapperSVG'

import Circles from '../../../static/svg/header/Circles'
import Italia from '../../../static/svg/header/Italia'

import Regions from '../../../static/data/regions.json'
import defaultViewValues from '../../../static/data/defaultViewValues.json'

import { manager } from '../../assets/state'

export default {
	name: 'Map',
	components: {
		WrapperSVG,
		Circles,
		Italia,
	},
	data() {
		return {
			bottle: 0,
			sizeCircle: 500,
			sizeItalia: 210,
			regions: Regions,
			values: defaultViewValues,
		}
	},
	mounted() {
		window.addEventListener('keypress', e => {
			let key = Number(e.key)

			if (key >= 0 && key <= 6) {
				this.bottle = manager.getBottle()
			} else return

			this.showRegion(
				this.regions[this.values[this.bottle].regione.it],
				'#808080',
			)

			console.log('MAP', manager.getBottle())
		})
	},
	methods: {
		showRegion(regionName, color) {
			// const regionNameEN = this.regions[regionName].en

			// const regionNameENCap =
			// 	String(regionNameEN)
			// 		.charAt(0)
			// 		.toUpperCase() + regionNameEN.slice(1)

			// let italia = document.querySelector('#italia g')
			// italia.style = `transform: translate(${this.regions[regionName].coords[0]}px, ${this.regions[regionName].coords[1]}px) scale(${this.regions[regionName].scale});`

			// let region = document.querySelector(`#${regionNameENCap}`)
			// region.style = `fill: ${color}`

			console.log('MAP/REGION', regionName)
		},
	},
}
</script>

<style scoped>
#map {
	position: absolute;
	margin-top: 100px;
	margin-left: 50px;
}
#circles,
#italia {
	position: absolute;
}
#italia {
	border: grey 1px solid;
	border-radius: 50%;
	padding: 10px;
}
#circles {
	z-index: 99;
}
</style>
