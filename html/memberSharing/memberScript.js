var i=0;
var printString;
var moji="ここに個人の決め台詞が表示される";
 
function printMoji() {
 document.getElementById("motto").innerText=moji.substring(0,i++);
 if(i<=moji.length) {
  setTimeout("printMoji()",250);
 }
}