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
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
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
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
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
				init: swiper => setHeight(swiper.el.querySelectorAll('.review')),
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
			spaceBetween: getCssVar(aboutInfoSlider, '--spaceBetween'),
			slidesPerView: 1,
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
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
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
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
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			slidesPerView: getCssVar(el, '--slidesPerView'),
			spaceBetween: getCssVar(el, '--spaceBetween'),
		}

		serviceImagesSliders.push(new Swiper('.service_images_s' + i, options))
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
		tpl: {
			closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

			main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
				<div class="fancybox__backdrop"></div>
				<div class="fancybox__carousel"></div>
				<div class="fancybox__footer"></div>
			</div>`,
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


	$('.modal .close_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()
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
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('header').toggleClass('show')

		$('.mob_header .mob_menu_btn').hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(200)
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


	// Focus when clicking on the field name
	const formLabels = document.querySelectorAll('form .label')

	if (formLabels) {
		formLabels.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.closest('.line').querySelector('.input, textarea').focus()
			})
		})
	}


	// Select file
	const fileInputs = document.querySelectorAll('form input[type=file]')

	if (fileInputs) {
		fileInputs.forEach(el => {
			el.addEventListener('change', () => el.closest('.file').querySelector('label span').innerText = el.value)
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

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})