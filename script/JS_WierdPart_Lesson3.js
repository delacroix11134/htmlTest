//函數程式設計

var arr1 = [1,2,3]
console.log(arr1);

var arr2 = []
for(i = 0 ; i < arr1.length ; i++){

	arr2.push(arr1[i]*2);

} 

console.log(arr2);  //這邊是利用迴圈產生第二組陣列


//而利用函數可以簡化程式碼

function mapForEach(arr , func){  //帶入兩個值:一個陣列 一個處理陣列的函數

	var newArr = [];  //新增一個新陣列
	for(i = 0 ; i < arr.length ; i++){  //利用迴圈逐項處理原陣列
		newArr.push(
			func(arr[i])  //將新陣列填入處理後的參數
		)        
	}
	return newArr;
}


//利用以上函數新增陣列
var arr3 = mapForEach(arr1 , function(item){  //這裡item等於arr[i]  
	return item * 3;  //返回處理後的參數
})  //利用mapForEach函數建立新的陣列

console.log(arr3)  //[ 3 , 6 , 9 ]


//另一個例子
var arr4 = mapForEach(arr3 , function(item){
	return item > 3;  //確認物件是否大於三，並返回布林值
})

console.log(arr4)  //[ false, true, true ]



//再來我想要自己輸入比對的數字，所以要另外定義一個函數
var checkNumber = function(limiter , item){
	return item > limiter;
}

//上一章講的.bind函數方法，如果第一個參數是this，第二個以後的參數會綁定原函數的代入值
var arr5 = mapForEach(arr3 , checkNumber.bind(this, 6));  //6綁定了limiter這個參數 而item參數則是arr3的逐項

console.log(arr5)


//如果不想在mapForEach裡使用.bind方法 另外創造一個函數 功能是返回另一個函數
var checkNumberSimple = function(limiter){
	return function(limiter , item){  //在這裡只創造函數並不是帶入上面的limiter
		return item > limiter
	}.bind(this , limiter)  //在這邊才設定limiter
}

var arr6 = mapForEach(arr3 , checkNumberSimple(3));

console.log(arr6)