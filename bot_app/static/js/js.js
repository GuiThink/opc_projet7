$(document).ready(function () {


    class Time {

        constructor() {
        }

        addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        time() {
            const d = new Date();
            const h = this.addZero(d.getHours());
            const m = this.addZero(d.getMinutes());
            const time = h + ":" + m;

            return time;
        }
    }


    function setTime(time) {
        $('#initial-time').append("<p class=\"card-text bot-time small\">"+ time + "</p>");
    }


    function userMessage() {

        let questionInput = $('#questionInput');
        const chatBox = $('#chat-box');

        $('form').on('submit', function (event) {
            if (questionInput.val() !== '') {
                const time = new Time().time();
                const newUserItem = $("<div class=\"row user-wrapper justify-content-end\">" +
                    "<div class=\"col-xs-12 col-md-8 col-lg-8\">" +
                    "<div class=\"row user flex-row-reverse\">" +
                    "<div class=\"col-xs-4 col-md-0 col-lg-0\"></div>" +
                    "<div class=\"col-xs-4 col-md-3 col-lg-2\">" +
                    "<img class=\"card-img-top\" src=\"/static/img/anonym_img.png\" alt=\"Rejeton\">" +
                    "</div>" +
                    "<div class=\"col-xs-4 col-md-0 col-lg-0\"></div>" +
                    "<div class=\"col-xs-12 col-md-9 col-lg-10\">" +
                    "<h5 class=\"card-title\">Rejeton</h5>" +
                    "<p class=\"card-text\">" + questionInput.val() + "</p>" +
                    "<p class=\"card-text user-time small\">" + time + "</p>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>").hide().fadeIn(500);

                chatBox.append(newUserItem);
            }

            event.preventDefault();
            questionInput.val('');
            ajaxCall();
        });
    }

    function ajaxCall() {
        $.post("/user-question"
        )

        .then(function (data) {
            //
        });
    }

    const initTime = new Time().time();
    setTime(initTime);
    userMessage();

});





//const newBotResp = $("<div class=\"row bot-wrapper justify-content-start\">"+
//                "<div class=\"col-xs-12 col-md-8 col-lg-8\">"+
//                    "<div class=\"row bot\">"+
//                        "<div class=\"col-xs-4 col-md-0 col-lg-0\"></div>"+
//                        "<div class=\"col-xs-4 col-md-3 col-lg-2\">"+
//                            "<img class=\"card-img-top\" src=\"/static/img/papy_img.png\" alt=\"papy-robot\">"+
//                        "</div>"+
//                        "<div class=\"col-xs-4 col-md-0 col-lg-0\"></div>"+
//                        "<div class=\"col-xs-12 col-md-9 col-lg-10\">"+
//                            "<h5 class=\"card-title\">GrandPy</h5>"+
//                            "<p class=\"card-text\">" + response + "</p>"+
//                            "<p class=\"card-text bot-time small\">17:12</p>"+
//                        "</div>"+
//                    "</div>"+
//                "</div>"+
//            "</div>").hide().delay(1000).fadeIn(500);

//$chatBox.append(newBotResp);


// function btnServerElt() {
//     const btnServerElt = document.getElementById("server_time");
//     btnServerElt.addEventListener("click", function () {
//         ajaxGet("http://127.0.0.1:5000/getTime", function (response) {
//             document.getElementById("time").innerText = response;
//         });
//     });
// }