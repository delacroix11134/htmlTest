var score = 0;

//利用巢狀陣列儲存問題與答案
var questionsAndAnswer = [
    ['1 + 1 = ?', 2],
    ['2 + 2 = ?', 4],
    ['3 + 3 = ?', 6]
//在這裡加入新問題

];


//在這裡的question已經接收了questionsAndAnswer[i]，所以question[0] = questionsAndAnswer[i][0]
//所以顯示出的是問題1
var askQuestion = function(question){
    var answer = prompt(question[0],'');
    if( answer == question[1] ){
        alert('Correct!');
        score++;
        showScore();
        }　else {
        alert('Sorry. The correct answer is ' + question[1]);
        showScore();
     }
 }

var showScore = function(){
    document.getElementById('score').innerHTML = '目前的分數是: ' + score + '/ ' + questionsAndAnswer.length;
}


//利用異步callback解決prompt連續出現會block頁面更新的問題
async function sleep(ms = 0){
    return new Promise( function(resolve){
        setTimeout(resolve,ms);
    })
}

/*
async function startAsking(){
    for( i = 0 ; i < questionsAndAnswer.length ; i++){
        askQuestion(questionsAndAnswer[i]);
        showScore();
        //await必須在async function裡面使用
        //在這裡一定要用await才會即時顯示(?)
        //.then必須在Promise後使用
        await sleep(10).then(console.log('sleep!'));
     }
 }
*/







