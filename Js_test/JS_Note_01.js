//刪除陣列重複原素
var delRepeat = function(arr){
   var newArr = [];
   arr.forEach(function(element){
   	   if(newArr.indexOf(element) == -1){
   	   	   newArr.push(element);
   	}})
   return newArr;
}
console.log(delRepeat([1,1,1,2,3,3,4,5,6,6,7,8,8,8,8]))


//diff function可以把a陣列減去b陣列元素後回傳新陣列
var diff = function(a,b){
	return a.filter(function(x){ return b.indexOf(x) == -1})
}
console.log(diff( [1,3,5,7,7,9,0], [7]))


//.filter()代入ㄧ個callback function，回傳在callback中得到值為true的元素
c = [1,2,3,4,5]
console.log(c.filter(function(x){ return x >= 3}))


//.sort()
//array排序(字串長度)
function sortByLength (array) {
  return array.sort(function(a,b){
     return a.length > b.length ? 1 : -1;
  })
};
console.log(sortByLength(['aa','aaaaa','aaa','aaaaaa','a','aaaa']))


//array排序(數字大小)
function sortByNumber (array) {
  return array.sort(function(a,b){
     return a - b;
  })
};
console.log(sortByNumber(['64','32','2','4','16','8']))


