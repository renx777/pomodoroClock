var pomo = {
    session: false,
    anime: false,
    smin: $('#sminutes').text(),
    ssec: $('#sseconds').text(),
    bmin: $('#bminutes').text(),
    bsec: $('#bseconds').text(),
    pomsession: false,
    paused: false,
    pombreak: false,
    reset: false,
    stimer: function stimer() {
        $('#bot').css('background-color', 'red')
        $('.display').css('border', '1px solid red');
        var min = $('#dmin').text();
        var sec = $('#dsec').text();
        var tix = pomo.smin * 60 + 's';
        var a = "#dmin";
        var b = "#dsec";
        $('#mid').addClass('x');
        $('.x').css('animation-duration', tix)
        $('#mid').addClass('y');
        pomo.pomsession = true;
        console.log(tix);
        console.log("rd")
        sec--;
        $(b).text(sec);

        if (sec < 0) {

            $(b).text(59);
            min--;
            $(a).text(min);

        }

        if (min == 0 && sec == 0) {
            var mint = $('#bminutes').text();

            $('#dmin').text(mint);
            $('#dsec').text(0);
            clearInterval(sess);
            delete sess;
            pomo.pomsession = false;
            brks = window.setInterval(pomo.btimer, 1000)
            $('#mid').removeClass('x');

            $('#mid').removeClass('y');

        }

    },
    btimer: function btimer() {
        $('#bot').css('background-color', 'green')
        $('.display').css('border', '1px solid green')
        $('#mid').addClass('x');
        var tiz = pomo.bmin * 60 + 's';
        $('#mid').addClass('y');
        console.log("d");
        pomo.pombreak = true;
        var minx = $('#dmin').text();
        var secx = $('#dsec').text();
        var as = "#dmin";
        var bs = "#dsec";
        secx--;
        $(bs).text(secx);

        if (secx < 0) {
            $('.x').css('animation-duration', tiz)
            $(bs).text(59);
            minx--;
            $(as).text(minx);

        }

        if (minx == 0 && secx == 0) {

            $('#mid').removeClass('x');

            $('#mid').removeClass('y');
            clearInterval(brks);

            delete brks;
            pomo.pombreak = false;
            pomo.start();

        }


    },

    start: function () {

        console.log(pomo.session);

        pomo.session = true;
        var mins = $('#sminutes').text();
        console.log(pomo.smin);

        setTimeout(function () {

            $('#dmin').text(mins - 1);
            $('#dsec').text(59);

            sess = window.setInterval(pomo.stimer, 1000);

        }, 1000);

        pbar(mins);
    },
    resets: function () {
        pomo.reset = true;
        location.reload(true)

   /*if((pomo.pomsession==true && pomo.session==true )|| (pomo.pomsession==false) ){
   
   clearInterval(sess)
   delete sees;
   $('#dmin').text(0);
   $('#dsec').text(0);
   pomo.session=false;
   
   }
   
   
   if((pomo.pombreak==true && pomo.session==true) || (pomo.pomsession==false) ){
   
   clearInterval(brks);
       delete brks;
   $('#dmin').text(0);
   $('#dsec').text(0);
   pomo.session=false;
   
   }*/},

    sin: function () {
        var min = $('#sminutes').text();
        if (min <= 59) {
            min++;
            $('#sminutes').text(min)
        }



    },
    sdec: function () {
        var min = $('#sminutes').text();
        if (min > 1) {
            min--;
            $('#sminutes').text(min)
        }

    },
    bin: function () {
        var brk = $('#bminutes').text();
        if (brk <= 59) {
            brk++;
            $('#bminutes').text(brk)
        }
    },
    bdec: function () {

        var brk = $('#bminutes').text();
        if (brk > 1) {
            brk--;
            $('#bminutes').text(brk)
        }


    },
    pause: function () {


        $('#bars').toggleClass('paused')


        if (pomo.pomsession == true || pomo.pombreak == true) {

            if (pomo.pomsession == true) {
                window.clearInterval(sess);
                delete sess;
                pomo.pomsession = false;
            }
            else {
                window.clearInterval(brks);
                delete brks;
                pomo.pombreak = false;

            }
        }
        else if (pomo.pomsession == false || pomo.pombreak == false) {

            if (pomo.pomsession == false) {

                sess = window.setInterval(pomo.stimer, 1000);
                pomo.progression = true;

            }
            else {
                brks = window.setInterval(pomo.btimer, 1000);
                pomo.pombreak = true;

            }



        }
        else {
            console.log("F")
        }

    }


}



$('#start').on('click', function () {
    $('#start').prop("disabled", true)
    //$('#mid').addClass('x');

    //$('#mid').addClass('y')




})

$('#pause').on('click', function () {

    $('#mid').toggleClass('y');



})