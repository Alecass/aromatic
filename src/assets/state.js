let _BOTTLE = 0
let _BUTTON = ''

const numVini = 3
const numButton = 6

const manager = {
	setBottle: value => {
		_BOTTLE = value
	},
	getBottle: () => {
		return _BOTTLE
	},
	setButton: string => {
		_BUTTON = string
	},
	getButton: () => {
		return _BUTTON
	},
}

const state = {
	updateState: () => {
		window.addEventListener('keypress', e => {
			let key = Number(e.key)

			if (key >= 0 && key < numVini) manager.setBottle(key)
			else manager.setBottle(manager.getBottle())

			if (isNaN(key)) manager.setButton(e.key)
		})
	},
	watchBottle: () => {
		return manager.getBottle()
	},
	watchButton: () => {
		return manager.getButton()
	},
}

export default state
