/*
如果是以最大值max，最小值min來寫這個語句，這也是產生整數的亂數，會像下面這樣:

Math.floor(Math.random() * (max - min + 1)) + min

現在要利用這個產生亂數的方法，作一個線上抽獎的活動，客戶說有下面幾個獎品:
50吋液晶電視 1台
PS4遊戲機 3台
手機行動充電器 10台
7-11的100元購物券 100張
預計參與抽獎的人數有1萬人，要如何來寫這個程式的抽獎過程的應用程式？
*/


const awards = 114;

const people = 10000;

for(i = 0 ; i <= awards ; i++){
	console.log(Math.floor(Math.random()*people + 1));
}