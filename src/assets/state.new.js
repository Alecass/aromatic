import Vue from 'vue'
import wines from '../../static/data/wines.json'

export const state = Vue.observable({
	bottle: 0,
	button: null,
})

export const setBottle = () => {
	window.addEventListener('keypress', e => {
		let key = Number(e.key)

		if (key >= 0 && key < wines.length && !isNaN(key)) state.bottle = key
		else return
	})
}

export const setButton = id => {
	state.button = id
}
