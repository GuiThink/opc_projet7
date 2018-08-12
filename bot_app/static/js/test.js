	        $.post("/user-question", { question : questionInput.val() }


        //        $.ajax({
        //            data : {
        //                question : questionInput.val()
        //            },
        //            type : 'POST',
        //            url : '/user-question'
        //        });

            ).then(function(data) {

	            const question = data.quest;
                const user = data.user;
                const img = data.img;
                const post_time = data.posttime;

                $chatBox = $('#chat-box');

                if (question !== undefined) {

                    const newUserItem = $("<div class=\"row user-wrapper justify-content-end\">" +
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
                                                "<p class=\"card-text user-time small\">"+ post_time +"</p>" +
                                            "</div>" +
                                        "</div>" +
                                    "</div>" +
                                 "</div>").hide().fadeIn(500);

                    $chatBox.append(newUserItem);


                }
            });