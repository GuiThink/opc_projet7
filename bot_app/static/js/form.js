
$(document).ready(function() {

	$('form').on('submit', function(event) {

		$.ajax({
			data : {
				question : $('#questionInput').val()
			},
			type : 'POST',
			url : '/process'
		})
		.done(function(data) {
			const question = data.question;
            const name = data.name;
            const img = data.img;
            const time = data.time;

            $blog = $('#chat-box');
            $blog.append("<div class=\"card user col-xs-12 col-md-8\">" +
                            "<img class=\"card-img-top\" src=\"" + img + "\" alt=\"" + name + "\">" +
                            "<div class=\"card-body\"><h5 class=\"card-title\">" + name + "</h5>" +
                                "<p class=\"card-text\">" + question + "</p>" +
                                "<p class=\"card-text time small\">" + time + "</p>" +
                            "</div>" +
                         "</div>");

			//$('#successAlert').text(question + name + img + time).show();
			$('#errorAlert').hide();
		});

		event.preventDefault();

	});
});



// function btnServerElt() {
//     const btnServerElt = document.getElementById("server_time");
//     btnServerElt.addEventListener("click", function () {
//         ajaxGet("http://127.0.0.1:5000/getTime", function (response) {
//             document.getElementById("time").innerText = response;
//         });
//     });
// }
