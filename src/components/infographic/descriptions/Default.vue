<template>
	<div id="default">
		<div v-for="(title, index) in titles" :key="index" :id="title">
			<h5 class="uppercase title">{{ title }}</h5>

			<h3 class="capitalize value" ref="title">
				{{ wines[bottle][title] }}
			</h3>
		</div>
	</div>
</template>

<script>
import defaultViewTitles from '../../../../static/data/defaultViewTitles.json'
import wines from '../../../../static/data/wines.json'
import { state } from '../../../assets/state.new'
import gsap from 'gsap'

export default {
	name: 'Default',
	data() {
		return {
			titles: defaultViewTitles,
			wines: wines,
		}
	},
	computed: {
		bottle() {
			return state.bottle
		},
	},
	watch: {
		bottle: function() {
			console.log('Default.vue/watching...')

			this.animate()
		},
	},
	methods: {
		animate: function() {
			gsap.from(this.$refs.title, {
				delay: 0.5,
				opacity: 0,
				duration: 0.5,
				ease: 'circ.inOut',
				y: 30,
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
