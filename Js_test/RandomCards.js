/*press ctrl + B to open console */


let cards = [ 'Spade' , 'Heart' , 'Club' , 'Dimond'];
let number = [ 'A' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , 'J' , 'Q' , 'K'];

/*用迴圈列出所有的牌面*/

for ( i= 0 ; i < cards.length ; i++){
	for ( j =0 ; j < number.length ; j++){
		console.log( cards[i] + number[j] );
	}
}


console.log('------')
/*用random產生5張隨機牌面*/

for(shuffle = 1 ; shuffle <= 5 ; shuffle++){
    console.log( cards[Math.floor(Math.random()*3)] + number[Math.floor(Math.random()*12)]);
}
