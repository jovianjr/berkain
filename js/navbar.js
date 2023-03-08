var t1 = new TimelineMax({ paused: true });

t1.to('.nav-container', 1, {
	left: 0,
	ease: Expo.easeInOut,
});

t1.staggerFrom(
	'.nav-container .menu',
	0.8,
	{ y: 100, opacity: 0, ease: Expo.easeOut },
	'0.1',
	'-=0.5'
);

t1.reverse();
$(document).on('click', '.nav-open', function () {
	t1.reversed(!t1.reversed());
});

$(document).on('click', '.nav-close', function () {
	t1.reversed(!t1.reversed());
});

$('.menu-beranda').hover(
	function () {
		$('.navhover-beranda').css('opacity', '20%');
		$('.navhover-beranda').css('translateY', '2px');
	},
	function () {
		$('.navhover-beranda').css('opacity', '0%');
	}
);

$('.menu-telusuri').hover(
	function () {
		$('.navhover-telusuri').css('opacity', '20%');
	},
	function () {
		$('.navhover-telusuri').css('opacity', '0%');
	}
);

$('.menu-peta').hover(
	function () {
		$('.navhover-peta').css({ opacity: '20%' });
	},
	function () {
		$('.navhover-peta').css('opacity', '0%');
	}
);

$('.menu-masuk').hover(
	function () {
		$('.navhover-masuk').css('opacity', '20%');
	},
	function () {
		$('.navhover-masuk').css('opacity', '0%');
	}
);
