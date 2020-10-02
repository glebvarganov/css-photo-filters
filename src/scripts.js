$( document ).ready(function() {

	function checkURL(url) {
		return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
	}

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
	
	$( "button.own-image" ).on( "click", function() {

		$.confirm({
		    title: 'Своя картинка!',
		    content: '' +
		    '<form action="" class="formName">' +
		    '<div class="form-group">' +
		    '<label>Введите URL собственного изображения</label>' +
		    '<input type="url" placeholder="Адрес картинки" class="image-url form-control" required />' +
		    '</div>' +
		    '</form>',
		    buttons: {
		        formSubmit: {
		            text: 'Изменить',
		            btnClass: 'btn-blue',
		            action: function () {
		                var urlImg = this.$content.find('.image-url').val();
		                urlImg = urlImg.trim();
		                var checkImage = checkURL( urlImg );
		                
		                if(!urlImg) {
		                    $.alert('Введите ссылку на изображение!');
		                    return false;
		                }

		                if(!checkImage) {
		                    $.alert('Введите корректную ссылку на изображение!');
		                    return false;
		                }

		                $('#img-src').attr('src', urlImg);

		            }
		        },
		        cancel: function () {
		            //close
		        },
		    },
		    onContentReady: function () {
		        // bind to events
		        var jc = this;
		        this.$content.find('form').on('submit', function (e) {
		            // if the user submits the form by pressing enter in the field.
		            e.preventDefault();
		            jc.$$formSubmit.trigger('click'); // reference the button and click it
		        });
		    }
		});


	});

});