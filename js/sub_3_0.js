// sub_3_0.js
if(screen.width>768) {
    $(function(){
    
        $('#kind ul li').eq(0).on('click',all);
        function all() {
            $('.viewBox ul').css({
                top:'0'
            });
            $('.viewBox ul li').css({
                display : 'block'
            });
            $('.dial .numbers .pcP').css('display','block')
        }
    
        $('#kind ul li').eq(1).on('click',car_out)
    
        function car_out() {
            $('.viewBox ul').css({
                top:'0'
            });
            $('.viewBox .container ul').css('height','2800px')
            $('.viewBox ul li').css({
                display: 'none'
            });
            $('.viewBox ul .car_out').css({
                display: 'block'
            });
            $('.viewBox ul .all').eq(0).css({
                display : 'block'
            });
            $('.dial .numbers .pcP').css('display','none')
            $('.dial .numbers .pcP').eq(0).css('display','block')
            $('.dial .numbers .pcP').eq(1).css('display','block')
        }
    
        $('#kind ul li').eq(2).on('click',car_in)
        function car_in() {
            $('.viewBox ul').css({
                top:'0'
            });
            $('.viewBox .container ul').css('height','1360px');
            $('.viewBox ul li').css({
                display: 'none'
            });
            $('.viewBox ul .car_in').css({
                display : 'block',
            })
            $('.dial .numbers .pcP').css('display','none');
            $('.dial .numbers .pcP').eq(0).css('display','block');
        }
    
        $('#kind ul li').eq(3).on('click',ect)
        function ect() {
            $('.viewBox ul').css({
                top:'0'
            });
            $('.viewBox .container ul').css('height','1360px');
            $('.viewBox ul li').css({
                display: 'none'
            });
            $('.viewBox ul .ect').css({
                display : 'block'
            })
            $('.viewBox ul .all').eq(0).css({
                display : 'block'
            })
            $('.dial .numbers .pcP').css('display','none');
            $('.dial .numbers .pcP').eq(0).css('display','block');
        }
    
        //?????????
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
        $('.dial .numbers p').eq(4).on('click',()=>
        $('.viewBox ul').css({
            position : 'absolute',
            top : '-5400px'
        })
        ) 
        $('.dial .numbers p').eq(5).on('click',()=>
        $('.viewBox ul').css({
            position : 'absolute',
            top : '-6750px'
        })
        )    
        $('.dial .numbers p').eq(6).on('click',()=>
        $('.viewBox ul').css({
            position : 'absolute',
            top : '-7200px'
        })
        )    
        $('.dial .numbers p').eq(7).on('click',()=>
        $('.viewBox ul').css({
            position : 'absolute',
            top : '-8550px'
        })
        )         
        //?????? 
        let itemArr = [];
        for(i=0;i<23;i++) {
            itemArr.push($('.viewBox ul h2').eq(`${i}`).text().toLowerCase());
        }
        console.log(itemArr[0]);
        $('.search').on('click',search)
        function search(){
            let result = itemArr.indexOf($('.textbox').val().toLowerCase());
            console.log(result);
    
            $('.viewBox ul').css({
                top:'0'
            });
            $('.viewBox .container ul').css('height','1360px');
            $('.viewBox ul li').css({
                display: 'none'
            });
            $('.viewBox ul li').eq(result).css({
                display : 'block'
            })
            $('.viewBox ul .all').css({
                display : 'block'
            })
            $('.dial .numbers p').css('display','none');
            $('.dial .numbers p').eq(0).css('display','block');
        }
            
    
        
        
    })
    
};
if(screen.width<769) {
    $(function(){
    
        $('#kind ul li').eq(0).on('click',all);
        function all() {
            $('.viewBox ul').css({
                top:'0'
            });
            $('.viewBox ul li').css({
                display : 'block'
            });
            $('.dial .numbers p').css('display','block');
        }
    
        $('#kind ul li').eq(1).on('click',car_out)
    
        function car_out() {
            $('.viewBox ul').css({
                top:'0'
            });
            $('.viewBox .container ul').css('height','2800px')
            $('.viewBox ul li').css({
                display: 'none'
            });
            $('.viewBox ul .car_out').css({
                display: 'block'
            });
            $('.viewBox ul .all').eq(0).css({
                display : 'block'
            });
            $('.dial .numbers p').css('display','none')
            $('.dial .numbers .pcP').css('display','block')
        }
    
        $('#kind ul li').eq(2).on('click',car_in)
        function car_in() {
            $('.viewBox ul').css({
                top:'0'
            });
            $('.viewBox .container ul').css('height','1360px');
            $('.viewBox ul li').css({
                display: 'none'
            });
            $('.viewBox ul .car_in').css({
                display : 'block',
            })
            $('.dial .numbers p').css('display','none');
            $('.dial .numbers .pcP').eq(0).css('display','block');
            $('.dial .numbers .pcP').eq(1).css('display','block');
            $('.dial .numbers').css('padding','0px 30px');
        }
    
        $('#kind ul li').eq(3).on('click',ect)
        function ect() {
            $('.viewBox ul').css({
                top:'0'
            });
            $('.viewBox .container ul').css('height','1360px');
            $('.viewBox ul li').css({
                display: 'none'
            });
            $('.viewBox ul .ect').css({
                display : 'block'
            })
            $('.viewBox ul .all').eq(0).css({
                display : 'block'
            })
            $('.dial .numbers p').css('display','none');
            $('.dial .numbers .pcP').eq(0).css('display','block');
            $('.dial .numbers .pcP').
            eq(1).css('display','block');
            $('.dial .numbers').css('padding','0px 30px');
        }
    
        //?????????
        $('.dial .numbers p').eq(0).on('click',()=>
        $('.viewBox ul').css({
            position : 'absolute',
            top : '0px'
        })
        )
        $('.dial .numbers p').eq(1).on('click',()=>
        $('.viewBox ul').css({
            position : 'absolute',
            top : '-1350px'
        })
        )
        $('.dial .numbers p').eq(2).on('click',()=>
        $('.viewBox ul').css({
            position : 'absolute',
            top : '-2700px'
        })
        )
        $('.dial .numbers p').eq(3).on('click',()=>
        $('.viewBox ul').css({
            position : 'absolute',
            top : '-4050px'
        })
        )    
        $('.dial .numbers p').eq(4).on('click',()=>
        $('.viewBox ul').css({
            position : 'absolute',
            top : '-5400px'
        })
        ) 
        $('.dial .numbers p').eq(5).on('click',()=>
        $('.viewBox ul').css({
            position : 'absolute',
            top : '-6750px'
        })
        )    
        $('.dial .numbers p').eq(6).on('click',()=>
        $('.viewBox ul').css({
            position : 'absolute',
            top : '-7100px'
        })
        )    
        $('.dial .numbers p').eq(7).on('click',()=>
        $('.viewBox ul').css({
            position : 'absolute',
            top : '-8450px'
        })
        )       
        //?????? 
        let itemArr = [];
        for(i=0;i<23;i++) {
            itemArr.push($('.viewBox ul h2').eq(`${i}`).text().toLowerCase());
        }
        console.log(itemArr[0]);
        $('.search').on('click',search)
        function search(){
            let result = itemArr.indexOf($('.textbox').val().toLowerCase());
            console.log(result);
    
            $('.viewBox ul').css({
                top:'0'
            });
            $('.viewBox .container ul').css('height','1360px');
            $('.viewBox ul li').css({
                display: 'none'
            });
            $('.viewBox ul li').eq(result).css({
                display : 'block'
            })
            $('.viewBox ul .all').css({
                display : 'block'
            })
            $('.dial .numbers p').css('display','none');
            $('.dial .numbers p').eq(0).css('display','block');
        }        
    })
}
