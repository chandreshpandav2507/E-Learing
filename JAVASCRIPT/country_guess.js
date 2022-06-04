//https://restcountries.eu/rest/v2/all

window.onload = init;
var pick='';

function init(){
    document.getElementById('myButton').addEventListener('click',myLoader,false);
    document.getElementById('myGuess').addEventListener('click',guessWord,false);
   
}

function myLoader(){
    var xHR = new XMLHttpRequest;
    xHR.onload = rOutput;
    xHR.open('GET','https://restcountries.eu/rest/v2/all',true);
    xHR.send();
}
function guessWord(){
    var word1='';
    var guess = document.getElementById('guess').value;   
    var word = pick.name.split('');
   for(i=0; i<word.length; i++){
       if(word[i].toLowerCase() == guess[i].toLowerCase()){
        word1 += word[i];
       }else{
           word1+='-';
       }
   }
   document.getElementById('output2').innerHTML = word1;

}
function rOutput(){
    var myObject = JSON.parse(this.responseText);
    pick = myObject[Math.floor(Math.random()*myObject.length)]; // in pick we wants the random country name.
    console.log(pick.name);
    var word1='';
    for(var i=0; i<pick.name.length; i++){
        word1 +='-';
    }
    // console.log(word1);
    document.getElementById('output1').innerHTML = shuffleWord(pick.name);
    document.getElementById('output2').innerHTML = word1;
}

function shuffleWord(word){
    var response = '';
    word = word.split('');
    while(word.length>0){
        console.log(word);
        response += word.splice(Math.floor(Math.random()*word.length), 1);
    }
    return response;
}