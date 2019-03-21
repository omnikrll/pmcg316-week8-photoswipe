var pswpElement = $('.pswp')[0];

var items = [
	{
		src: 'dogs/dogs1.jpg',
		w: 1200,
		h: 1200
	},
	{
		src: 'dogs/dogs2.jpg',
		w: 450,
		h: 338
	},
	{
		src: 'dogs/dogs3.jpg',
		w: 634,
		h: 458
	},
	{
		src: 'dogs/dogs4.jpg',
		w: 1200,
		h: 795
	},
	{
		src: 'dogs/dogs5.jpg',
		w: 606,
		h: 495
	},
	{
		src: 'dogs/dogs6.jpg',
		w: 735,
		h: 306
	}
];

var openPhotoSwipe = function(_index) {
	var options = {
		index: _index
	};

	// Initializes and opens PhotoSwipe
	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

$('.gallery-item a').click(function() {
	event.preventDefault();

	var _index = $(this).data('index');
	openPhotoSwipe(_index);
});