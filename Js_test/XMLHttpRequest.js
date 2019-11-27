//用google短網址API還原/取得原網址/短網址

// Include data for accessing Google APIs

const apiKey = 'AIzaSyCGMuawy0HL43jhJfZ7hZ3NO0rg_k2T2qE';
const projection = 'FULL';
const url = 'https://www.googleapis.com/urlshortener/v1/url';


// Some page elements
//html表單輸入欄位(沒有html的檔案)
const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');


// AJAX functions
//短網址還原成原本網址
function expandUrl() {
   const urlToExpand = url + '?key=' + apiKey +
'&shortUrl=' + $inputField.val(); //google端點網址+api key+輸入的短網址
  const xhr = new XMLHttpRequest(); //新增一個XMLHttpRequest
  xhr.responseType = 'json';  //資料類型為json
  xhr.onreadystatechange = function(){
    if (xhr.readyState === XMLHttpRequest.DONE) { //如果狀態完成
  console.log(xhr.response); //log回傳的值(可刪掉)
      $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
    } //在網頁中顯示
  }
  xhr.open('GET', urlToExpand); //開啟
  xhr.send(); //送出
}

function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();
  const data = JSON.stringify({longUrl: urlToShorten});
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = function(){
    if (xhr.readyState === XMLHttpRequest.DONE){
      $responseField.append('<p>Your shortened url is: </p><p>' +       xhr.response.id + '</p>');
    }
  }
  xhr.open('POST',urlWithKey);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);
