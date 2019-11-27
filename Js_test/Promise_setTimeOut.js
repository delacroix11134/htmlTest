//callback寫法
/*
setTimeout(function(){
	console.log('1');
	b(2);
})

function b(number){
	setTimeout(function(){
		console.log(number);
		c(3);
	}, 1000	)
}

function c(number){
	setTimeout(function(){
		console.log(number);
	}, 1000 )
}
*/
var delay = function(s){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			resolve("solved");	
		}, s );
	})
}

delay(1000)
.then(function(){
	console.log("solved");
	return delay(1000)})
.then(function(){
	console.log("solved");
	return delay(1000)})
.then(function(){
	console.log("solved");
	return delay(1000)})
.catch(function(err){
	console.log(err);
});




/*
//Promise寫法
var delay = function(s){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			resolve(s);
		}, s )
	})
}
delay(0).then(
	function(s){ 
		console.log("alpha"); 
		return delay(1000);
	}).then(
	function(s){
		console.log("beta");
		return delay(1000);
	}).then(
	function(s){
		console.log("gama");
		return delay(1000);
	})


//另一個範例
var askMom = function(){
	return new Promise( function( resolve , reject ){
		var phone = "nothing";
		if(resolve){
			phone = "an iphoneX!";
			setTimeout(function(){
				console.log("I got " + phone)
			}, 3000)
		}
	})
}
var isMomAngry = function(){
	return new Promise(function(resolve,reject){
		console.log("Mom is in good mood")
		resolve();
	})
}
//成功的狀況
isMomAngry().then(askMom);
//失敗的狀況
Promise.reject(new Error('fail')).then(askMom).catch(setTimeout(function(){console.log("I got nothing.QQ")},4000 ))

*/