// sub_3_0.js
$(function(){
    $('.dial .numbers p').eq(0).on('click',()=>
    $('.viewBox ul').css({
        position : 'absolute',
        top : '0px'
    })
    )
    $('.dial .numbers p').eq(1).on('click',()=>
    $('.viewBox ul').css({
        position : 'absolute',
        top : '-1360px'
    })
    )
    $('.dial .numbers p').eq(2).on('click',()=>
    $('.viewBox ul').css({
        position : 'absolute',
        top : '-2720px'
    })
    )
    $('.dial .numbers p').eq(3).on('click',()=>
    $('.viewBox ul').css({
        position : 'absolute',
        top : '-4080px'
    })
    )

    $('#kind ul li').eq(0).on('click',() =>
    $('.viewBox ul li').css({
        display : 'block',
        margin : '40px 0px',
    })
    )
    $('#kind ul li').eq(1).on('click',car_out)
    function car_out() {
        $('viewBox ul').css({
            height : '4000px'
        })
        $('.viewBox ul li').css({
            display: 'none',
            margin : '0px'
        });
        $('.viewBox ul .car_out').css({
            display : 'block',
            margin : '20px 0px'
        })
    }
    $('#kind ul li').eq(2).on('click',car_in)
    function car_in() {
        $('.viewBox ul li').css({
            display: 'none',
            margin : '0'
        });
        $('.viewBox ul .car_in').css({
            display : 'block',
            margin : '20px 0px'
        })
    }
    $('#kind ul li').eq(3).on('click',ect)
    function ect() {
        $('.viewBox ul .car_out').css({
            margin : '0',
            display: 'none'
        });
        $('.viewBox ul .car_in').css({
            margin : '0',
            display : 'none'
        })
    }
    
})