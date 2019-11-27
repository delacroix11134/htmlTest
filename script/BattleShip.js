var lacation1 = Math.floor(Math.random()*8 + 1 );
var location2 = lacation1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;


while(isSunk == false){
	guess = prompt('輸入1~10的數字: ');

	if ( guess <= 0 || guess > 10 ){
		alert('請輸入有效數字');
	} else {
		guesses ++;

		if ( guess == lacation1 || guess == location2 || guess == location3 ){
 		    alert('HIT!');
		    hits ++;
		    } else {
		    alert('MISS!');
	    };
	    if ( hits == 3 ){
		        isSunk = true;
		        alert('Ship Sunk!');
		        console.log(isSunk);
	    };
	};


}

var stats = '你總共猜了 ' + guesses + ' 次 ' + '你的射擊準確率為 ' + ( 3 / guesses ).toFixed(4) * 100 + '%';

alert(stats); 