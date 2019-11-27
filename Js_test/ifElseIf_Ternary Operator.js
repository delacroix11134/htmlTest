const x = 550;

//if裡面還有if的巢狀結構
if ( x >= 200 ){
	if ( x >= 500 ){
		console.log('x >= 500');
	} else { console.log( '200 <= x < 500');}
} else if ( x < 200 ){
	console.log( 'x < 200');
} else {
	console.log( 'x < 100');
}


//使用三元運算符簡化語句(只適用簡單的的判斷情況)
//注意: 建議只使用三元運算符在單一行的語句上，雖然它可以使用在多行與巢狀結構

const y = 20;

( y >= 100)? console.log( 'y >= 100') : console.log( 'y < 100');


//由於三元運算符的語法很簡單，它也常被配合用在指定值的語句中，例如:

const value1 = 10;

const value2 = 5;

const foo = value1 > value2 ? 'baz' : null;

console.log(foo);


//?運算子可當做if/else陳述式的簡短表示方式。在一些大型運算式中，若使用 if...else 陳述式會顯得很冗長，通常會使用這類簡短表示方式。例如：

const now = new Date();

const greeting = `Good ${ (now.getHours() > 17) ? 'evening.' : 'day.' }`;

console.log(greeting);