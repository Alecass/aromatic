<template>
	<div id="map">
		<!-- wrapper + mare -->
		<WrapperSVG
			id="mare"
			class="position"
			:width="String(sizeItaliaMare)"
			:height="String(sizeItaliaMare)"
			><Mare
		/></WrapperSVG>

		<!-- wrapper + italia -->
		<WrapperSVG
			id="italia"
			class="position"
			:width="String(sizeItaliaMare)"
			:height="String(sizeItaliaMare)"
			><Italia
		/></WrapperSVG>

		<!-- wrapper + circles -->
		<WrapperSVG
			id="circles"
			class="position"
			:width="String(sizeCircle)"
			:height="String(sizeCircle)"
			><Circles
		/></WrapperSVG>

		<!-- wrapper + location (marker) -->
		<WrapperSVG
			id="location"
			class="position"
			:width="String(sizeLocation)"
			:height="String(sizeLocation)"
			><Location
		/></WrapperSVG>

		<!-- wrapper + name (nome regione) -->
		<WrapperSVG
			id="name"
			class="position"
			:width="String(sizeItaliaMare)"
			:height="String(sizeItaliaMare)"
		>
			<!-- path che il nome della regione segue per curvarsi -->
			<path id="curve" d="M 90 150 Q 90 90 150 90" />
			<text id="text">
				<textPath xlink:href="#curve">
					{{ regionNameCap }}
				</textPath>
			</text>
		</WrapperSVG>
	</div>
</template>

<script>
import Location from '../../../static/svg/header/Location'
import Circles from '../../../static/svg/header/Circles'
import regions from '../../../static/data/regions.json'
import Italia from '../../../static/svg/header/Italia'
import wines from '../../../static/data/wines.json'
import Mare from '../../../static/svg/header/Mare'
import WrapperSVG from '../../utils/WrapperSVG'
import { state } from '../../assets/state.new'
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
			// dimensioni degli svg
			sizeCircle: 113.5,
			sizeItaliaMare: 205,
			sizeLocation: 27.09,
			//
			regions: regions,
			wines: wines,
			// nome capitalizzato della regione
			regionNameCap: '',
		}
	},
	computed: {
		bottle() {
			return state.bottle
		},
	},
	watch: {
		bottle: function() {
			console.log('Map.vue/watching...')

			// prendo il vino corrente
			const vino = this.wines[this.bottle]
			// prendo la fregione del vino corrente
			const regioneVino = vino.regione
			// prendo il rettaglio della regione del vino corrente
			const dettaglioRegione = this.regions[regioneVino]
			// prendo il nome della regione in italiano del vino corrente
			const region = dettaglioRegione.it

			this.animateToRegion(region)
		},
	},
	methods: {
		// funxione per capitalizzare òla prima lettera di una stringa
		capitalize(string) {
			return (
				// cast in stringa per sicurezza
				String(string)
					.charAt(0)
					.toUpperCase() + string.slice(1)
			)
		},
		animateToRegion(regionName) {
			// prendo la verione in inglese della regione
			const regionNameEN = this.regions[regionName].en
			// capitalizzo la prima lettera
			const regionNameENCap = this.capitalize(regionNameEN)

			// muovo la mappa veros la regione
			gsap.to('#italia g', {
				// uso le informazioni della regione da regions.json
				x: this.regions[regionName].coords[0],
				y: this.regions[regionName].coords[1],
				scale: this.regions[regionName].scale,
				//
				duration: 1,
				ease: 'circ.inOut',
			})

			// ruoto il cerchio in una posizione casuale
			gsap.to('#circles', {
				rotate: `${Math.floor(Math.random() * 90 - 45) + 45}deg`,
				transformOrigin: 'right bottom',
				duration: 1,
				ease: 'circ.inOut',
			})

			// animo il marker
			gsap.to('#location', {
				opacity: 0,
				duration: 1,
				ease: 'circ.inOut',
				scale: 1.5,
			})
			gsap.to('#location', {
				delay: 1,
				opacity: 1,
				duration: 0.5,
				ease: 'elastic.out(1.5, 0.5)',
				scale: 0.8,
			})

			// animo il nome
			gsap.from('#name', {
				delay: 1,
				opacity: 0,
				duration: 1,
				ease: 'elastic.out(1.5, 0.5)',
				scale: 1.5,
			})

			// mostro il nome della regione
			this.regionNameCap = this.capitalize(regionName)

			// prendo e coloro la regione
			const region = document.querySelector(`#${regionNameENCap}`)
			region.style = 'fill: #808080'
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
