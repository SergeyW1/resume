const btn = document.querySelector('.btn__menu')
const modalEl = document.querySelectorAll('.modal')
const modalBodyEl = document.querySelectorAll('.modal__body')

const project = document.querySelector('.nav-menu__project')
const work = document.querySelector('.nav-menu__work')
const education = document.querySelector('.nav-menu__education')

const modalProject = document.querySelector('#modal-project')
const modalWork = document.querySelector('#modal-work')
const modalEducation = document.querySelector('#modal-education')

const btnClose = document.querySelectorAll(".modal__close")

btn.addEventListener('click', (e) => {
	e.preventDefault()
	btn.classList.toggle('active')
	document.querySelector('.nav-menu').classList.toggle('nav-menu__active')
})

project.addEventListener('click', () => {
	modalProject.classList.add('modal__show')
})

work.addEventListener('click', () => {
	modalWork.classList.add('modal__show')
})

education.addEventListener('click', () => {
	modalEducation.classList.add('modal__show')
})

function removeClass () {
	return modalEl.forEach(item => {
		if(item.classList.contains('modal__show')) {
		return	item.classList.remove('modal__show')
		}
	})
}

window.addEventListener('keydown', (e) => {
	if (e.keyCode === 27) {
		removeClass()
	}
})

btnClose.forEach(item => {
	item.addEventListener('click', () => {
		removeClass()
	})
})


window.addEventListener('click', (e) => {
	modalBodyEl.forEach(item => {
		if (e.target === item) {
			removeClass()
		}
	})
})




