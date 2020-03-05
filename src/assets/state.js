let BOTTLE = 0

export const manager = {
	setBottle: value => {
		BOTTLE = value
	},
	getBottle: () => {
		return BOTTLE
	},
}

export const state = {
	setBottle: () => {
		window.addEventListener('keypress', e => {
			let key = Number(e.key)

			if (key >= 0 && key <= 6) manager.setBottle(key)
			else return
		})
	},
	getBottle: () => {
		window.addEventListener('keypress', e => {
			let key = Number(e.key)
			let bottle = 0

			if (key >= 0 && key <= 6) {
				console.log('BOTTLE', manager.getBottle())
				bottle = manager.getBottle()
			}
		})

		return bottle
	},
}
