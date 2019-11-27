var g = G$('John','Doe');
g.greet().setLang('es').greet(true)

$('#login').click(function(){
	//按下按鈕後 建立一個新的Greetr物件
    var loginGrtr = G$('Victor' , 'Kuo');
    //隱藏選單和按鈕UI
    $('#logindiv').hide();
    //用選單選定的語言設定該Greetr物件
    //並鏈結一個更新h1的方法
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log(); 
})