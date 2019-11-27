//在array裡塞兩個object,各有三個屬性name,age,hobby
let testArray = [
  {name: 'Victor',
   age: 29,
   hobby: ['comic' , 'game' , 'movie'],
  },
  {name: 'Ikea',
   age: 24,
   hobby: ['sleep' , 'tv'],
  }
]

//宣告一個變數為2
let number = 2;

//宣告一個function功能是比較兩個值的大小並回傳true/false
function compare( hobby , number){
  if (hobby.length > number){
    return true;
  } else {
    return false;
  }
}

//利用forEach比較testArray裡hobby陣列長度是否大於2
function isHobbyMore(){
  testArray.forEach(function(element){
    console.log(`${element.name}'s hobby is more than 2: ${compare(element.hobby , number)}`);
  })
}

//執行
isHobbyMore();