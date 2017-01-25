$(function(){
    var aKeys = [];
    var windowWidth = $( window ).width();

    var imgStartwidth = windowWidth / 10 ;

    var windowHeight = $(window).height();

    var imgStartHeight = windowHeight / 5;

    var widthInc = 5;

    var top = 0;
    var left = 0;

    var x = 1;


    $(this).keydown(function(e) {

       var keyNum = e.keyCode;
       var uni = String.fromCharCode(keyNum);
       aKeys.push(uni);
   });

    setInterval(function(){
            var keysPressed = (aKeys.toString()).replace(/,/g,"");

            keysPressed = keysPressed.toLowerCase();



            if (keysPressed.includes("memes") ) {
                while (top <= windowHeight)  {


                        var oImg = document.createElement("img");
                        oImg.setAttribute('src', "https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg");
                        oImg.setAttribute('alt', "doge");
                        oImg.setAttribute('class', 'memes');
                        oImg.style.width = imgStartwidth + "px";
                        oImg.style.position = "fixed";

                        //console.log(left);
                        //console.log(top);

                        if (left > windowWidth) {
                            left = 0;
                            top += imgStartHeight;
                        }

                        oImg.style.top = top + "px";
                        oImg.style.left = left + "px";
                        oImg.style.height = imgStartHeight + "px";
                        document.body.appendChild(oImg);

                        left += imgStartwidth;



                }

            }







            /*if ($(".memes")[0]) {
                var visibility = $(".memes").css("visibility");
                console.log(visibility)

                switch (visibility) {
                case "hidden":
                    $(".memes").css("visibility","visible");
                    break;

                case "visible":
                    $(".memes").css("visibility","hidden");
                    break;
            }}
             */
        }, 500);




});



