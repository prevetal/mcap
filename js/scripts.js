WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function() {
	// Gallery carousel slider
	const galleryCarouselSliders = [],
		galleryCarousel = document.querySelectorAll('.gallery_carousel .swiper')

	galleryCarousel.forEach((el, i) => {
		el.classList.add('gallery_carousel_s' + i)

		let options = {
			loop: true,
			speed: 6000,
			centeredSlides: true,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			allowTouchMove: false,
			lazy: true,
			slidesPerView: getCssVar(el, '--slidesPerView'),
			spaceBetween: getCssVar(el, '--spaceBetween'),
		}

		galleryCarouselSliders.push(new Swiper('.gallery_carousel_s' + i, options))
	})


	// Case images slider
	const caseBigSliders = [],
		caseThumbsSliders = [],
		caseBigs = document.querySelectorAll('.case .images .big .swiper'),
		caseThumbs = document.querySelectorAll('.case .images .thumbs .swiper')

	caseThumbs.forEach((el, i) => {
		el.classList.add('case_thumb_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			spaceBetween: 10,
			breakpoints: {
				0: {
					slidesPerView: 4,
				}
			},
		}

		caseThumbsSliders.push(new Swiper('.case_thumb_s' + i, options))
	})

	caseBigs.forEach((el, i) => {
		el.classList.add('case_big_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: el.querySelector('.swiper-button-next'),
				prevEl: el.querySelector('.swiper-button-prev')
			},
			slidesPerView: 1,
			spaceBetween: 0,
			thumbs: {
				swiper: caseThumbsSliders[i]
			}
		}

		caseBigSliders.push(new Swiper('.case_big_s' + i, options))
	})


	// Reviews slider
	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .swiper')

	reviews.forEach((el, i) => {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: el.querySelector('.swiper-button-next'),
				prevEl: el.querySelector('.swiper-button-prev')
			},
			breakpoints: {
				0: {
					spaceBetween: getCssVar(el, '--spaceBetween-0'),
					slidesPerView: getCssVar(el, '--slidesPerView-0'),
				},
				768: {
					spaceBetween: getCssVar(el, '--spaceBetween-768'),
					slidesPerView: getCssVar(el, '--slidesPerView-768'),
				},
				1280: {
					spaceBetween: getCssVar(el, '--spaceBetween-1280'),
					slidesPerView: getCssVar(el, '--slidesPerView-1280'),
				}
			},
			on: {
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.review')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// About info slider
	let aboutInfoSlider = document.querySelector('.about_info .swiper')

	if (aboutInfoSlider) {
		new Swiper(aboutInfoSlider, {
			loop: true,
			speed: 500,
			loopAdditionalSlides: 1,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 1,
			lazy: true,
			navigation: {
				nextEl: aboutInfoSlider.querySelector('.swiper-button-next'),
				prevEl: aboutInfoSlider.querySelector('.swiper-button-prev')
			},
			breakpoints: {
				0: {
					spaceBetween: getCssVar(aboutInfoSlider, '--spaceBetween-0'),
				},
				768: {
					spaceBetween: getCssVar(aboutInfoSlider, '--spaceBetween-768'),
				},
				1280: {
					spaceBetween: getCssVar(aboutInfoSlider, '--spaceBetween-1280'),
				}
			},
		})
	}


	// Team slider
	const teamSliders = [],
		team = document.querySelectorAll('.team .swiper')

	team.forEach((el, i) => {
		el.classList.add('team_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: el.querySelector('.swiper-button-next'),
				prevEl: el.querySelector('.swiper-button-prev')
			},
			slidesPerView: getCssVar(el, '--slidesPerView'),
			breakpoints: {
				0: {
					spaceBetween: getCssVar(el, '--spaceBetween-0'),
				},
				768: {
					spaceBetween: getCssVar(el, '--spaceBetween-768'),
				},
				1280: {
					spaceBetween: getCssVar(el, '--spaceBetween-1280'),
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.person')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.person')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		teamSliders.push(new Swiper('.team_s' + i, options))
	})


	// Service images slider
	const serviceImagesSliders = [],
		serviceImages = document.querySelectorAll('.service .images .swiper')

	serviceImages.forEach((el, i) => {
		el.classList.add('service_images_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: el.querySelector('.swiper-button-next'),
				prevEl: el.querySelector('.swiper-button-prev')
			},
			slidesPerView: getCssVar(el, '--slidesPerView'),
			spaceBetween: getCssVar(el, '--spaceBetween'),
		}

		serviceImagesSliders.push(new Swiper('.service_images_s' + i, options))
	})


	// Objects slider
	const objectsSliders = [],
		objectImagesSliders = [],
		objects = document.querySelectorAll('.objects .swiper.main'),
		objectImages = document.querySelectorAll('.objects .images .swiper')

	objectImages.forEach((el, i) => {
		el.classList.add('object_images_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			nested: true,
			navigation: {
				nextEl: el.querySelector('.swiper-button-next'),
				prevEl: el.querySelector('.swiper-button-prev')
			},
			slidesPerView: 1,
			spaceBetween: 0,
		}

		objectImagesSliders.push(new Swiper('.object_images_s' + i, options))
	})

	objects.forEach((el, i) => {
		el.classList.add('objects_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: el.querySelector('.swiper-button-next'),
				prevEl: el.querySelector('.swiper-button-prev')
			},
			slidesPerView: getCssVar(el, '--slidesPerView'),
			breakpoints: {
				0: {
					spaceBetween: getCssVar(el, '--spaceBetween-0'),
				},
				768: {
					spaceBetween: getCssVar(el, '--spaceBetween-768'),
				},
				1280: {
					spaceBetween: getCssVar(el, '--spaceBetween-1280'),
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.object')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.object')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		objectsSliders.push(new Swiper('.objects_s' + i, options))
	})


	// Logos carousel slider
	const logosCarouselSliders = [],
		logosCarousel = document.querySelectorAll('.logos .swiper')

	logosCarousel.forEach((el, i) => {
		el.classList.add('logos_s' + i)

		let options = {
			loop: true,
			speed: 6000,
			centeredSlides: true,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			allowTouchMove: false,
			lazy: true,
			slidesPerView: getCssVar(el, '--slidesPerView'),
			spaceBetween: getCssVar(el, '--spaceBetween'),
		}

		logosCarouselSliders.push(new Swiper('.logos_s' + i, options))
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Fancybox
	const fancyOptions = {
		dragToClose: false,
		placeFocusBack: false,
		l10n: {
			CLOSE: 'Закрыть',
			NEXT: 'Следующий',
			PREV: 'Предыдущий',
			MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
		},
		on: {
			ready: (fancybox) => {
				const container = fancybox.getContainer()

				const btn = container.querySelector('.is-close-button')

				if (btn) {
					btn.classList.add('is-close-btn')
					btn.innerHTML = '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>'
				}
			},
		}
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show(
			[{
				src: `#${e.target.getAttribute('data-modal')}`,
				type: 'inline'
			}],
			fancyOptions
		)
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		...fancyOptions,
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn, .mob_menu .close_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('.mob_menu').toggleClass('show')

		$('.mob_header .mob_menu_btn').hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(200)
	})


	$('.mob_menu .menu .item a.sub_link').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$(this).next('.sub').slideToggle(300)
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub')

		// Submenu on the touch screen
		$('header .menu .item > a.sub_link').click(function (e) {
			const dropdown = $(this).next()

			if (dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Close the submenu when clicking outside it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Services
	$('.services .service .spoler_btn').click(function(e) {
		e.preventDefault()

		const parent = $(this).closest('.service')

		$(this).toggleClass('active')
		parent.find('.data').toggleClass('show')
	})


	// Form area — minus/plus
	$('body').on('click', '.form .area .btn', function (e) {
		e.preventDefault()

		const $input = $(this).closest('.area').find('.input'),
			current = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit') || '',
			direction = $(this).hasClass('minus') ? -1 : 1

		if (isNaN(current)) {
			$input.val(minimum + unit)
			return
		}

		$input.val(Math.min(Math.max(current + direction * step, minimum), maximum) + unit)
	})

	$('body').on('keydown', '.form .area .input', function () {
		const $input = $(this),
			minimum = parseFloat($input.data('minimum')),
			maximum = parseFloat($input.data('maximum'))

		setTimeout(() => {
			const val = parseFloat($input.val())
			$input.val(Math.min(Math.max(isNaN(val) ? minimum : val, minimum), maximum))
		})
	})


	// Custom submit
	$('.form').submit(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show(
			[{
				src: '#success_modal',
				type: 'inline'
			}],
			fancyOptions
		)
	})


	// Mini pop-up windows
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})


	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Short quiz
	var shortQuizCurrentStep = 1,
		shortQuizTotalSteps = 5

	$('.short_quiz .head').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$(this).next('.data').slideToggle(300)
	})

	$('.short_quiz .count .total').text(shortQuizTotalSteps)

	$('.short_quiz .step .options .mini_modal .btn').click(function(e) {
		e.preventDefault()

		const miniModal = $(this).closest('.mini_modal'),
			modalCont = $(this).closest('.modal_cont'),
			newText = $(this).html()

		miniModal.find('.btn').removeClass('selected')
		$(this).addClass('selected')

		modalCont.find('.mini_modal_btn').removeClass('active')
		miniModal.removeClass('active')

		modalCont.find('.mini_modal_btn span').html(newText)
	})

	$('.short_quiz .next_btn').click(function(e) {
		e.preventDefault()

		shortQuizCurrentStep++

		$('.short_quiz .step').hide()
		$('.short_quiz .step' + shortQuizCurrentStep).fadeIn(300)

		$('.short_quiz .count .current').text(shortQuizCurrentStep)

		if (shortQuizCurrentStep == shortQuizTotalSteps) {
			$('.short_quiz .next_btn').removeClass('show')
			$('.short_quiz .send_btn').addClass('show')
		}
	})


	// Quiz
	var quizCurrentStep = 1,
		quizTotalSteps = 7

	let progress = 100 / quizTotalSteps * quizCurrentStep
	$('.quiz .progress div').css('width', progress + '%')

	$('.quiz .count .total').text(quizTotalSteps)

	$('.quiz .btns .next_btn').click(function(e) {
		e.preventDefault()

		quizCurrentStep++

		$('.quiz .step').hide()
		$('.quiz .step' + quizCurrentStep).fadeIn(300)

		$('.quiz .count .current').text(quizCurrentStep)

		let progress = 100 / quizTotalSteps * quizCurrentStep
		$('.quiz .progress div').css('width', progress + '%')

		if (quizCurrentStep > 1) {
			$('.quiz .btns .prev_btn').addClass('show')
		}

		if (quizCurrentStep === 7) {
			$('.quiz .btns .next_btn').removeClass('show')
			$('.quiz .btns .send_btn').addClass('show')
		}
	})


	$('.quiz .btns .prev_btn').click(function(e) {
		e.preventDefault()

		quizCurrentStep = quizCurrentStep - 1

		$('.quiz .step').hide()
		$('.quiz .step' + quizCurrentStep).fadeIn(300)

		$('.quiz .count .current').text(quizCurrentStep)

		let progress = 100 / quizTotalSteps * quizCurrentStep
		$('.quiz .progress div').css('width', progress + '%')

		if (quizCurrentStep === 1) {
			$('.quiz .btns .prev_btn').removeClass('show')
		}

		if (quizCurrentStep !== 7) {
			$('.quiz .btns .send_btn').removeClass('show')
			$('.quiz .btns .next_btn').addClass('show')
		}
	})


	$('.quiz .btns .send_btn').click(function(e) {
		e.preventDefault()

		$('.quiz .success').addClass('show')
	})


	$('.quiz .step1 .other .btn').click(function(e) {
		e.preventDefault()

		$(this).hide()
		$('.quiz .step1 .other .input').focus()
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 390) document.getElementsByTagName('meta')['viewport'].content = 'width=390, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})