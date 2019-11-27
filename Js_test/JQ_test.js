//$()是JQuery的選擇器 用來選取DOM中的元素
//.ready()相當於window.onload(){...}
$(document).ready(function(){
    //.hide()會在選取的DOM元素插入inline-style{diaplay: none;}
    $('h1').hide();
    //show()
    $('h1').show();
    //.slideToggle切換slide狀態(.slideDown()&.slideUp())
    //slideToggle有兩個參數 第一個是時間參數(slow/normal/fast/毫秒) 第二個是callback 可自行帶入
    $('#btn-slideToggle').click(function () { 
        $('.fake-text').slideToggle(2000,function(){console.log('slideToggle with fn')});
        
    });
    //.fadeToggle切換fade狀態(.fadeIn()&.fadeOut())
    //slideToggle有兩個參數 第一個是時間參數(slow/normal/fast/毫秒) 第二個是callback 可自行帶入
    $('#btn-fadeToggle').click(function () { 
        $('.fade-box').fadeToggle(2000,function(){console.log('fadeToggle with fn')});
        
    });
    //.attr()用來改變選取元素的任意屬性 有兩個參數(屬性名/屬性值)
    $('#btn-attr').click(function(){
        $('.link-attr').attr('href', 'http://www.google.com').html('attr-link-google');;
    })
    //.append()會在選取元素中插入最後一個子元素
    $('body').append('<h2>456</h2>');
    //.prepend()和.append()相似 只是他是插入最前面
    $('body').prepend('<h2>123</h2>');
    
})

