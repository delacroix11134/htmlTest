var arr = [ 'Victor' , 'Ikea' , 'Mr.Stupid' , 'Sour' , 'Bob' , 'Ma' , 'Dodo' , 'KFC' , 'SLW' , 'AJ' , 'Cindy'];

const num = arr.length;  //為了讓lenght的數字不會在for的條件裡變動

console.log('There are ' + num + ' persons:')

for( i = 0 ; i < num ; i++){
	var seq = Math.floor(Math.random()*arr.length);
	var name = arr[seq];
	console.log( ( i + 1 ) + ': '+ name);
    arr.splice(seq , 1);  //刪除random到的陣列元素
}