<template>
	<div id="header">
		<transition-group
			@beforeEnter="beforeEnter"
			@enter="enter"
			@leave="leave"
			:css="false"
		>
			<h1 class="vino capitalize" v-if="show" key="vino">
				{{ values[bottle].vino }}
			</h1>
			<h3 class="produttore capitalize" v-if="show" key="produttore">
				{{ values[bottle].produttore }}
			</h3>
		</transition-group>
	</div>
</template>

<script>
import defaultViewValues from '../../../static/data/defaultViewValues.json'

// import state from '../../assets/state'
import { state } from '../../assets/state.new'

import gsap from 'gsap'

export default {
	name: 'Header',
	data() {
		return {
			// bottle: state.bottle,
			values: defaultViewValues,
			show: true,
		}
	},
	computed: {
		bottle() {
			return state.bottle
		},
	},
	methods: {
		// start animazioni
		beforeEnter(el) {
			el.style.opacity = 0
		},
		enter(el, done) {
			gsap.to(el, {
				opacity: 1,
				duration: 0.5,
				ease: 'circ.inOut',
				x: 0,
				onComplete: () => done(),
			})
		},
		leave(el, done) {
			gsap.to(el, {
				opacity: 0,
				duration: 0.5,
				ease: 'circ.inOut',
				x: -30,
				onComplete: () => done(),
			})
		},
		// end animazioni
	},
}
</script>

<style scoped>
.vino {
	font-family: 'Playfair Display Italic';
	color: #b14d74;
	font-size: 3rem;
	line-height: 2.5rem;
}
.produttore {
	font-family: 'Playfair Display Bold';
	font-weight: 100;
	font-style: italic;
	color: #c2c2c2;
	font-size: 1.5rem;
}
</style>
