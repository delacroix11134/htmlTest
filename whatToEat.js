var arr = [];

var lunch;

var input;

var showDefault = function(){
	document.getElementById('nowWeHave').innerHTML = '1.先選幾個吧';
	console.log(arr);
}

var show = function(){
	document.getElementById('nowWeHave').innerHTML = '現在有: ' + arr;
	console.log(arr);
}

//.indexOf會返回陣列元素第一次出現的位置
var check = function(){
	arr = arr.filter(function(element , index , arr){
		return arr.indexOf(element) === index;
	})
}

var arrPush = function(element){
	arr.push(element);
	check();
    show();
}

var record = function(){
	if(document.getElementById('input').value){
		input = document.getElementById('input').value;
	    arrPush(input);
	}
}

var clearArr = function(){
	arr.length = 0;
	showDefault();
	console.log('clear!')
}

var whatever = function(){
	arr.push( '韓式' , '越式' , '牛丼' , '拉麵' , '對面的意麵' , '隨便麵' , '雞帶排骨飯' , '番茄麵' , '豬血湯' , '雞肉飯' , '米粉湯' , '燒臘' ,'屎' , '我的大香蕉');
    check();	
	console.log(arr);
	chooseOne();
}

var chooseOne = function(){
	if ( arr.length <= 0 ){
        document.getElementById('lunch').innerHTML = '你還沒選齁....吃老衲一棒要不要'
	} else {
	    lunch = arr[Math.floor(Math.random()*arr.length)]
        document.getElementById('lunch').innerHTML = '今天中午吃....' + lunch + '!'
	}

}