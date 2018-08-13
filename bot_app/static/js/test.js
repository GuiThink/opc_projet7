}

    }

        function; print_user_msg(event) {

        const questionInput = $('#questionInput').val();
        const chatBox = $('#chat-box');
        const dt = new Date();
        const time = dt.getHours() + ":" + dt.getMinutes();

        if (questionInput !== undefined) {

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
                "<p class=\"card-text\">" + questionInput + "</p>" +
                "<p class=\"card-text user-time small\">" + time + "</p>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>").hide().fadeIn(500);


            chatBox.append(newUserItem);

        }

        $.post("/user-question", {question: questionInput}
        ).then(function (data) {
            //
        });

        event.preventDefault();
        questionInput.val('');
    }


    }




    $('form').on('submit', print_user_msg);