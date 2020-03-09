<template>
	<div id="header" ref="header">
		<h1 id="vino" class="capitalize" key="vino">
			{{ wines[bottle].vino }}
		</h1>
		<h3 id="produttore" class="capitalize" key="produttore">
			{{ wines[bottle].produttore }}
		</h3>
	</div>
</template>

<script>
import wines from '../../../static/data/wines.json'
import { state } from '../../assets/state.new'
import gsap from 'gsap'

export default {
	name: 'Header',
	data() {
		return {
			wines: wines,
			tl: gsap.timeline(),
		}
	},
	computed: {
		bottle() {
			return state.bottle
		},
	},
	watch: {
		// ascolto per cambiamenti della variabile bottle (computed)
		bottle: function() {
			console.log('Header.vue/watching...')

			this.animate()
		},
	},
	methods: {
		animate: function() {
			console.log('Header.vue/start animation')

			this.tl.from(this.$refs.header, {
				opacity: 0,
				x: -30,
				duration: 1,
				ease: 'circ.inOut',
			})
		},
	},
}
</script>

<style scoped>
#vino {
	font-family: 'Playfair Display Italic';
	color: #b14d74;
	font-size: 3rem;
	line-height: 2.5rem;
}
#produttore {
	font-family: 'Playfair Display Bold';
	font-weight: 100;
	font-style: italic;
	color: #c2c2c2;
	font-size: 1.5rem;
}
</style>
