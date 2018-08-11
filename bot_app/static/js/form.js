
$(document).ready(function() {

	$('form').on('submit', function(event) {

		$.ajax({
			data : {
				name : $('#nameInput').val(),
				email : $('#emailInput').val()
			},
			type : 'POST',
			url : '/process'
		})
		.done(function(data) {

			if (data.error) {
				$('#errorAlert').text(data.error).show();
				$('#successAlert').hide();
			}
			else {
				$('#successAlert').text(data.name).show();
				$('#errorAlert').hide();
			}

		});

		event.preventDefault();

	});

});


// $(document).ready(function() {
//
//     $('#form').on('submit', function(event) {
//
//         console.log('clicked on submit');
//
//         $.ajax({
//             data : {
//                 name : $('#input').val()
//             },
//             type : 'POST',
//             url : '/sign_up_user'
//         })
//
//         .done(function(data) {
//
//             $('#fuck').text(data.name);
//             // var user_name = (data.name);
//             // $('#list').append('<li class="list">{}</li>'.format(user_name));
//             console.log('haha');
//         });
//
//         event.preventDefault();
//
//     });
// });
