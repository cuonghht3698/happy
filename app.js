$(document).ready(function () {
    $("#canvas").click(function () {
        window.addEventListener('click', () => {
            document.getElementById('video').muted = true
            document.getElementById('video').play();

            document.getElementById('audio').muted = false
            document.getElementById('audio').play();


        })

        $("#ting").trigger('play');
        $(".gift").hide('fade', 1200);
        $(".page1").hide('fade', 1500);
        setTimeout(() => {
            $('.page2').show();
            // $('#video').trigger('play');
            // $('#video').trigger('muted');

            setText()
        }, 2000);
    });



});


function setText() {
    $('#audio').trigger('play');
    let time = 2100;
    $('#box-text').empty();
    const textVN = `Vào ngày Quốc tế phụ nữ chúc mọi thứ tốt đẹp nhất sẽ đến với bạn Chúc bạn một ngày 8/3 hạnh phúc!`;
    const textEN = `♥ On women’s day what can I wish for, but the very best for you! Happy Women’s Day!`;
    const strEnd = 'Vett'
    const arrStr = textVN.split(' ');
    const arrStr2 = textEN.split(' ');
    const arrStr3 = strEnd.split(' ');

    setTimeout(() => {
        arrStr.forEach(str => {
            time += 200;
            $('#box-text').append('<span>' + str + '&nbsp;</span>');
        });
        setTimeout(() => {
            time = 12000;
            $('#box-text').hide('slow');

            setTimeout(() => {
                time += 200;
                $('#box-text').empty();
                $('#box-text').show('slow');
                arrStr2.forEach(str => {
                    $('#box-text').append('<span>' + str + '&nbsp;</span>');
                });
            }, 600);

            setTimeout(() => {
                time += 200;
                $('#box-text').empty();
                $('#box-text').show('slow');
                arrStr3.forEach(str => {
                    $('#box-text').append('<span>' + str + '&nbsp;</span>');
                });
            }, 26000);

            setTimeout(() => {
                $(".gift").show('fade', 1200);
                $(".page1").show('fade', 1500);
                $('.page2').hide('fade', 300);
                document.getElementById('audio').stop();
            }, 30000);

        }, time);
    }, 500);
}