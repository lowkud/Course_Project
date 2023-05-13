$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:4,
		autoplay:false,
		// centerMode: true,
		// speed:1000,
		// autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 1000,
				settings: {
					slidesToShow:3
				}
			},
            {
				breakpoint: 750,
				settings: {
					slidesToShow:2
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