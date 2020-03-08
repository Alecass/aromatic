import Vue from 'vue'

export const state = Vue.observable({
	bottle: 0,
	button: 0,
})

export const setBottle = () => {
	window.addEventListener('keypress', e => {
		let key = Number(e.key)

		state.bottle = key

		// if (key >= 0 && key < 6) state.bottle = key
		// else state.bottle = state.bottle
	})
	// if (isNaN(key)) manager.setButton(e.key)
}
