$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:1,
		autoplay:false,
		// centerMode: true,

		// speed:1000,
		// autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});