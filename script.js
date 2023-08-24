(function(){

    // events for calculator buttons
    $('.num, .operator').on('click', (evt) => {
        $('.result span').html(function() {
            $(this).append(evt.target.innerHTML);
        })
    });

    // event for showing result on screen
    $('#calc').click(() => {
        let expression = $('.result span').html();
        if(expression.includes('x')) {
            expression = expression.replace('x', '*');
            let calculation = eval(expression);
            calculation = calculation.toLocaleString('en-US');
            $('.result span').html(calculation);
        } else {
            let calculation = eval(expression);
            calculation = calculation.toLocaleString('en-US');
            $('.result span').html(calculation);
        }
       
    });

    $('#del').click(() => {
        const leng = $('.result span').html().length;
        let newContent = $('.result span').html().slice(0, leng - 1);
        $('.result span').html(newContent);
    });

    $('#reset').click(() => {
        $('.result span').html('')
    });

    // event for changing themes
    $('.theme-btn').click(() => {
        $('.theme-btn').css('background', 'none');
        $('body').removeClass();
    });

    $('.theme1').click(() => {
        $('.theme1').css('background', 'hsl(6, 63%, 50%)');
    });

    $('.theme2').click(() => {
         $('.theme2').css('background', 'hsl(25, 98%, 40%)');
        $('body').addClass('two');
    });

    $('.theme3').click(() => {
        $('.theme3').css('background', 'hsl(176, 100%, 44%)');
        $('body').addClass('three');
        
    });

}) ();