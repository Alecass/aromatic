<template>
	<div id="default">
		<div v-for="(title, index) in titles" :key="index" :id="title">
			<h5 class="uppercase title">{{ title }}</h5>
			<transition
				@beforeEnter="beforeEnter"
				@enter="enter"
				@leave="leave"
				:css="false"
			>
				<h3 class="capitalize value" v-if="show">
					{{ values[bottle][title] }}
				</h3>
			</transition>
		</div>
	</div>
</template>

<script>
import defaultViewValues from '../../../../static/data/defaultViewValues.json'
import defaultViewTitles from '../../../../static/data/defaultViewTitles.json'

import state from '../../../assets/state'

import gsap from 'gsap'

export default {
	name: 'Default',
	data() {
		return {
			bottle: state.watchBottle(),
			titles: defaultViewTitles,
			values: defaultViewValues,
			show: true,
		}
	},
	mounted() {
		window.addEventListener('keypress', e => {
			this.show = false
			setTimeout(() => {
				this.show = true
			}, 1100)

			this.bottle = state.watchBottle()
			console.log('DEFAULT', this.bottle)
		})
	},
	methods: {
		beforeEnter(el) {
			el.style.opacity = 0
		},
		enter(el, done) {
			gsap.to(el, {
				opacity: 1,
				duration: 0.5,
				ease: 'circ.inOut',
				y: 0,
				onComplete: () => done(),
			})
		},
		leave(el, done) {
			gsap.to(el, {
				opacity: 0,
				duration: 0.5,
				ease: 'circ.inOut',
				y: 30,
				onComplete: () => done(),
			})
		},
	},
}
</script>

<style scoped>
#default {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
#cantina {
	flex-basis: 30%;
}
#anno {
	flex-basis: 20%;
}
#gradazione {
	flex-basis: 30%;
}
#vitigno {
	flex-basis: 20%;
}
.title {
	font-family: 'Poppins Light';
	font-weight: 100;
	color: rgb(169, 169, 169);
}
.value {
	font-family: 'Playfair Display Bold';
	color: rgb(232, 232, 232);
}
</style>
