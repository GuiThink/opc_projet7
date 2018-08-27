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
        $('.initial-time').append("<p class=\"card-text bot-time small\">" + time + "</p>");
    }


    function message() {

        const questionInput = $('#questionInput');
        const chatBox = $('#chat-box');

        $('form').on('submit', function (event) {
            if (questionInput.val() !== '') {
                let time = new Time().time();
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
                $('.scroll').animate({scrollTop: $('.scroll').get(0).scrollHeight}, 500);

                time = new Time().time();
                const newBotResp = $("<div class=\"row bot-wrapper justify-content-start\">" +
                    "<div class=\"col-xs-12 col-md-8 col-lg-8\">" +
                    "<div class=\"row bot\">" +
                    "<div class=\"col-xs-4 col-md-0 col-lg-0\"></div>" +
                    "<div class=\"col-xs-4 col-md-3 col-lg-2\">" +
                    "<img class=\"card-img-top\" src=\"/static/img/papy_img.png\" alt=\"papy-robot\">" +
                    "</div>" +
                    "<div class=\"col-xs-4 col-md-0 col-lg-0\"></div>" +
                    "<div class=\"col-xs-12 col-md-9 col-lg-10\">" +
                    "<h5 class=\"card-title\">GrandPy</h5>" +
                    "<p class=\"card-text dynamic-area\">Attends voir...que je réfléchisse une seconde.</p>" +
                    "<div class=\"loader\" id=\"loader\"></div>" +
                    "<p class=\"card-text bot-time small\">" + time + "</p>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>").hide().delay(1000).fadeIn(500);

                chatBox.append(newBotResp);
                $('.scroll').animate({scrollTop: $('.scroll').get(0).scrollHeight}, 500);


                $.post("/process", {"question": questionInput.val()}).then(function (data) {
                    const question = data.question;
                    const place_iframe_url = data.place_iframe_url;
                    const place_address = data.place_address;
                    const wikimedia_message = data.message;

                    console.log(question);

                    $('.loader').hide();
                    const dynamicArea = $('.dynamic-area');
                    const iframe = $("<iframe id=\"google_map\" width=\"100%\" height=\"250px\" frameborder=\"0\" style=\"border:0\" src=\""+ place_iframe_url +"\" allowfullscreen></iframe>");
                    dynamicArea.text("Attends voir...que je réfléchisse une seconde. Bien sûr mon poussin ! La voici : " + place_address);
                    dynamicArea.append(iframe);

                });

                event.preventDefault();
                questionInput.val('');
            }
        });
    }


    let initTime = new Time().time();

    setTime(initTime);
    message();

});
