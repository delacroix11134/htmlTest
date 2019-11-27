let count = 99;


//while迴圈(不同於for迴圈的寫法 功能幾乎相同)
while (count > 0) {
	console.log(count + ' bottles of beer on th wall');
	console.log(count + ' bottles of beer,');
	console.log('take one down, pass it around,')
	count -= 1;
	if (count >0) {
	console.log(count + ' bottles of beer on th wall.');
} else {
	console.log('No more bottles of beer on the wall.');
}
}


