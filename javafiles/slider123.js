let i=0 ;
    
    $('.slide12').click(function(){
       $('.active').addClass('nonActive').find('span').empty()
        $(this).removeClass('nonActive').addClass('active')
        i= $(this).index()
    })
    
    setItner = setInterval(go,4000);
    
    function go(){
       $('.active').addClass('nonActive').find('span').empty()
        $($('.slide12')[i%6]).removeClass('nonActive').addClass('active')
        i++;
    }
    