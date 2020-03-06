<template>
	<div id="map">
		<WrapperSVG
			id="mare"
			class="position"
			title="mare"
			:width="String(sizeItaliaMare)"
			:height="String(sizeItaliaMare)"
			><Mare
		/></WrapperSVG>
		<WrapperSVG
			id="italia"
			class="position"
			title="italia"
			:width="String(sizeItaliaMare)"
			:height="String(sizeItaliaMare)"
			><Italia
		/></WrapperSVG>
		<WrapperSVG
			id="circles"
			class="position"
			title="circles"
			:width="String(sizeCircle)"
			:height="String(sizeCircle)"
			><Circles
		/></WrapperSVG>
		<transition-group
			@beforeEnter="beforeEnter"
			@enter="enter"
			@leave="leave"
			:css="false"
		>
			<WrapperSVG
				key="location"
				id="location"
				class="position"
				title="location"
				:width="String(sizeLocation)"
				:height="String(sizeLocation)"
				v-if="show"
				><Location
			/></WrapperSVG>
			<WrapperSVG
				key="name"
				id="name"
				v-if="show"
				class="position"
				title="name"
				:width="String(sizeItaliaMare)"
				:height="String(sizeItaliaMare)"
			>
				<path id="curve" d="M 90 150 Q 90 90 150 90" />
				<text id="text">
					<textPath xlink:href="#curve">
						{{ regionNameCap }}
					</textPath>
				</text>
			</WrapperSVG>
		</transition-group>
	</div>
</template>

<script>
import WrapperSVG from '../../utils/WrapperSVG'

import Location from '../../../static/svg/header/Location'
import Circles from '../../../static/svg/header/Circles'
import Italia from '../../../static/svg/header/Italia'
import Mare from '../../../static/svg/header/Mare'

import defaultViewValues from '../../../static/data/defaultViewValues.json'
import Regions from '../../../static/data/regions.json'

import state from '../../assets/state'

import gsap from 'gsap'

export default {
	name: 'Map',
	components: {
		WrapperSVG,
		Location,
		Circles,
		Italia,
		Mare,
	},
	data() {
		return {
			show: false,
			bottle: state.watchBottle(),
			sizeCircle: 113.5,
			sizeItaliaMare: 205,
			sizeLocation: 27.09,
			regions: Regions,
			values: defaultViewValues,
			regionNameCap: '',
		}
	},
	mounted() {
		window.addEventListener('keypress', e => {
			this.show = false
			setTimeout(() => {
				this.show = true
			}, 1000)

			this.bottle = state.watchBottle()

			this.showRegion(
				this.regions[this.values[this.bottle].regione].it,
				'#808080',
			)

			console.log('MAP', this.bottle)
		})
	},
	methods: {
		showRegion(regionName, color) {
			const regionNameEN = this.regions[regionName].en

			const regionNameENCap =
				String(regionNameEN)
					.charAt(0)
					.toUpperCase() + regionNameEN.slice(1)

			this.regionNameCap =
				String(regionName)
					.charAt(0)
					.toUpperCase() + String(regionName).slice(1)

			let italia = document.querySelector('#italia g')
			let circles = document.querySelector('#circles')

			gsap.to(italia, {
				x: this.regions[regionName].coords[0],
				y: this.regions[regionName].coords[1],
				scale: this.regions[regionName].scale,
				duration: 1,
				ease: 'circ.inOut',
			})
			gsap.to(circles, {
				rotation: `${Math.floor(Math.random() * 360)}deg`,
				transformOrigin: 'right bottom',
				duration: 1,
				ease: 'circ.inOut',
			})

			let region = document.querySelector(`#${regionNameENCap}`)
			region.style = `fill: ${color}`

			console.log('MAP/REGION', regionName)
		},
		beforeEnter(el) {
			el.style.opacity = 1
		},
		enter(el, done) {
			gsap.to(el, {
				opacity: 1,
				duration: 0.5,
				ease: 'elastic.out(1.5, 0.5)',
				scale: 0.8,
				onComplete: () => done(),
			})
		},
		leave(el, done) {
			gsap.to(el, {
				opacity: 0,
				duration: 0.5,
				ease: 'circ.inOut',
				scale: 1.5,
				onComplete: () => done(),
			})
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
.position {
	position: absolute;
}
#italia,
#mare {
	border-radius: 50%;
	padding: 10px;
}
#italia {
	border: rgb(90, 94, 97) 0.5px solid;
}
#circles {
	transform: translateY(-1px);
}
#location {
	left: 102.5px;
	top: 102.5px;
}
#name {
	left: -0px;
	top: -20px;
	transform: rotate(15deg);
}
#curve {
	fill: transparent;
}
#text {
	fill: white;
	font-size: 1.7rem;
}
</style>
