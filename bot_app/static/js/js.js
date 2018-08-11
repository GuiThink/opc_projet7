$(document).ready(function() {

	$('form').on('submit', function(event) {


	    if ($('#questionInput').val() != "") {

            $.ajax({
                data : {
                    question : $('#questionInput').val()
                },
                type : 'POST',
                url : '/user-question'
            })
            .done(function(data) {
                const question = data.question;
                const user = data.user;
                const img = data.img;
                const time = data.time;
                const response = data.response;

                $blog = $('#chat-box');

                if (question != undefined) {

                    $blog.append("<div class=\"row user-wrapper justify-content-end\">" +
                                    "<div class=\"col-xs-12 col-md-8 col-lg-8\">" +
                                        "<div class=\"row user flex-row-reverse\">" +
                                            "<div class=\"col-xs-4 col-md-0 col-lg-0\"></div>" +
                                            "<div class=\"col-xs-4 col-md-3 col-lg-2\">" +
                                                "<img class=\"card-img-top\" src=\"" + img + "\" alt=\"" + user + "\">" +
                                            "</div>" +
                                            "<div class=\"col-xs-4 col-md-0 col-lg-0\"></div>" +
                                            "<div class=\"col-xs-12 col-md-9 col-lg-10\">" +
                                                "<h5 class=\"card-title\">" + user + "</h5>" +
                                                "<p class=\"card-text\">" + question + "</p>" +
                                                "<p class=\"card-text user-time small\">17:12</p>" +
                                            "</div>" +
                                        "</div>" +
                                    "</div>" +
                                 "</div>");

                    $blog.append("<div class=\"row bot-wrapper justify-content-start\">"+
                                    "<div class=\"col-xs-12 col-md-8 col-lg-8\">"+
                                        "<div class=\"row bot\">"+
                                            "<div class=\"col-xs-4 col-md-0 col-lg-0\"></div>"+
                                            "<div class=\"col-xs-4 col-md-3 col-lg-2\">"+
                                                "<img class=\"card-img-top\" src=\"/static/img/papy_img.png\" alt=\"papy-robot\">"+
                                            "</div>"+
                                            "<div class=\"col-xs-4 col-md-0 col-lg-0\"></div>"+
                                            "<div class=\"col-xs-12 col-md-9 col-lg-10\">"+
                                                "<h5 class=\"card-title\">GrandPy</h5>"+
                                                "<p class=\"card-text\">" + response + "</p>"+
                                                "<p class=\"card-text bot-time small\">17:12</p>"+
                                            "</div>"+
                                        "</div>"+
                                    "</div>"+
                                 "</div>");

                }
            });
        }
		event.preventDefault();
		$('#questionInput').val('')


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