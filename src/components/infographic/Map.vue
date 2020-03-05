<template>
	<div id="map">
		<WrapperSVG
			id="mare"
			title="mare"
			:width="String(sizeMare)"
			:height="String(sizeMare)"
			><Mare
		/></WrapperSVG>
		<WrapperSVG
			id="italia"
			title="italia"
			:width="String(sizeItalia)"
			:height="String(sizeItalia)"
			><Italia
		/></WrapperSVG>
		<WrapperSVG
			id="circles"
			title="circles"
			:width="String(sizeCircle)"
			:height="String(sizeCircle)"
			><Circles
		/></WrapperSVG>
	</div>
</template>

<script>
import WrapperSVG from '../../utils/WrapperSVG'

import Circles from '../../../static/svg/header/Circles'
import Italia from '../../../static/svg/header/Italia'
import Mare from '../../../static/svg/header/Mare'

import Regions from '../../../static/data/regions.json'
import defaultViewValues from '../../../static/data/defaultViewValues.json'

import { manager } from '../../assets/state'

import gsap from 'gsap'

export default {
	name: 'Map',
	components: {
		WrapperSVG,
		Circles,
		Italia,
		Mare,
	},
	data() {
		return {
			bottle: 0,
			sizeCircle: 205 / 2,
			sizeItalia: 205,
			sizeMare: 205,
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
				this.regions[this.values[this.bottle].regione].it,
				'#808080'
			)

			console.log('MAP', manager.getBottle())
		})
	},
	methods: {
		showRegion(regionName, color) {
			const regionNameEN = this.regions[regionName].en

			const regionNameENCap =
				String(regionNameEN)
					.charAt(0)
					.toUpperCase() + regionNameEN.slice(1)

			let italia = document.querySelector('#italia g')
			let circles = document.querySelector('#circles g')

			gsap.to(italia, {
				x: this.regions[regionName].coords[0],
				y: this.regions[regionName].coords[1],
				scale: this.regions[regionName].scale,
				duration: 1,
				ease: 'circ.inOut',
			})
			gsap.to(circles, {
				rotate: '45deg',
				duration: 1,
				ease: 'circ.inOut',
			})

			let region = document.querySelector(`#${regionNameENCap}`)
			region.style = `fill: ${color}`

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
#italia,
#mare {
	position: absolute;
}
#italia,
#mare {
	border-radius: 50%;
	padding: 10px;
}
#italia {
	border: grey 1px solid;
}
#circles {
	transform: translateY(-1px);
	transform-origin: center center;
}
</style>
