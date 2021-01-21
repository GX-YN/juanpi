var magnifier = $('#lay'),
    bigBox = $('#bigBox'),
    scale = 3,
    boxWidth = $('#Box').width(),
    boxHeight = $('#Box').height(),
    magW = parseInt(boxWidth / scale),
    magH = parseInt(boxHeight / scale);

$('#Box').mouseover(function() {
    magnifier.css({
            'display': 'block',
            'height': magH,
            'width': magW
        }),
        bigBox.css({
            'display': 'block',
            'height': magH * scale,
            'width': magW * scale
        })
});
$('#Box').mouseout(function() {
    magnifier.css({
            'display': 'none'
        }),
        bigBox.css({
            'display': 'none'
        })
});
$('#Box').mousemove(function(e, obj) {
    var e = e,
        obj = $('#Box'),
        bigBoxW = boxWidth * scale + 'px',
        bigBoxH = boxHeight * scale + 'px',
        pageX = parseInt(e.pageX - obj.offset().left),
        pageY = parseInt(e.pageY - obj.offset().top),
        pageMY = parseInt(pageY - magnifier.height() / 2),
        pageMX = parseInt(pageX - magnifier.width() / 2);

    if (pageX < parseInt(magnifier.width() / 2)) {

        pageMX = 0
    }
    if (pageMX >= obj.width() - magnifier.width()) {
        pageMX = obj.width() - magnifier.width()
    }
    if (pageMY < 0) {
        pageMY = 0
    }
    if (pageMY >= obj.height() - magnifier.height()) {

        pageMY = obj.height() - magnifier.height()
    }

    magnifier.css({

            'top': pageMY + 'px',
            'left': pageMX + 'px'

        }),

        $(bigBox).find('img').css({
            'height': bigBoxH,
            'width': bigBoxW,
            'display': 'block',
            'margin-left': pageMX * (-1) * scale,
            'margin-top': pageMY * (-1) * scale

        });

});

$('li').click(function() {

    var src = $(this).find('img').attr('src');
    $('#Box').find('img').attr('src', src);
    $('#bigBox').find('img').attr('src', src);

});

var len = $('li').length,
    multiple = 5,
    iMax = parseInt(len / multiple),
    liH = $('li').height(),
    preTop = multiple * liH + multiple * 5;
$('.gobottom').mouseover(function() {
    $(this).attr('src', '../img/good-1.jpg');
});
$('.gobottom').mouseout(function() {
    $(this).attr('src', '../img/good-1.jpg');
})
var i = 0;
var margT1 = $('ul').offset().top;
$('.gobottom').click(function() {
    var margT = $('ul').offset().top;
    if (-(margT - margT1 - preTop) <= iMax * preTop) {

        $('ul').css({
            'margin-top': margT - margT1 - preTop + 'px'

        })
    }
});
$('.gotop').mouseover(function() {
    $(this).attr('src', '../img/good-1.jpg');
});
$('.gotop').mouseout(function() {
    $(this).attr('src', '../img/good-1.jpg');
})

$('.gotop').click(function() {
    var margT = $('ul').offset().top;

    if (margT - margT1 + preTop <= 0) {

        $('ul').css({
            'margin-top': margT - margT1 + preTop + 'px'
        })
    }
    if (margT - margT1 + preTop > 0) {

        $('ul').css({
            'margin-top': 0 + 'px',

        })
    }
})