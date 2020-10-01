$( document ).ready(function() {

	$( "button.change-filter" ).on( "click", function() {
		var imgClass = $( this ).attr( "data-filter" ),
		filterDescription = $( this ).attr( "data-description" );

		$("#orig-image").removeClass().addClass( imgClass );
		$(".filter-description").text( filterDescription );
	});

	$( "button.change-image" ).on( "click", function() {
		var imgNumber = $( this ).attr( "data-img-src" ),
		imgUrl = "src/img/img" + imgNumber + ".jpg";

		$('#img-src').attr('src', imgUrl);
	});
	
});