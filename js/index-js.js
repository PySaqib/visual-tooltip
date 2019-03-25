$(window).ready(function(){

    $('#tooltipDemo').mouseover(function(){
        $('.tooltip').attr('id', 'visible');
    });

    $('.tooltip').hover(function(){$('.tooltip').attr('id', 'visible')}, function(){setTimeout(function(){$('.tooltip').attr('id', 'invisible')}, 250)});

});