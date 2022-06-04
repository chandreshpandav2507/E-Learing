//https://restcountries.eu/rest/v2/all

var pick ='';
window.onload = init();
function init(){
    document.getElementById('myButton').addEventListener('click',myLoader);
}
function myLoader(){
    var xHR = new XMLHttpRequest;
    xHR.onload = rOutput;
    xHR.open('GET', 'https://restcountries.eu/rest/v2/all', true);
    xHR.send();
}

function rOutput(){
    var myObject = JSON.parse(this.responseText);
    // console.log(myObjec  t)
    pick = myObject[Math.floor(Math.random()*myObject.length)];
    // myObject.forEach(function(e){
    //     console.log(e.name);
    // })
    console.log(pick.name);
}