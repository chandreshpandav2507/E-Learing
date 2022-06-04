// var animals = ["Cat", "Dog", "Rabbit", "Bird"];

// var randomChoice = Math.floor(Math.random()*animals.length);
// console.log(randomChoice);
// var randomAnimal = animals[randomChoice];
// var response = prompt("What is the index of " + randomAnimal);
// console.log(response);  
// var result = (response == randomChoice) ? "Correct" : "Opps! It was " + randomChoice;
// alert(result);

// var startValue = animals.length;
// animals[15] = "Buffelo";
// animals.fill("Mouse", startValue, animals.length-1);
// console.log(animals);
// console.log(animals.sort());

// var respose = prompt("Enter the animal you find!");
// var result = (animals.indexOf(respose)>=0) ? "Exist at Index: " + animals.indexOf(respose) : "Sorry it's not exist!";  
// alert(result);

// var response = prompt("Enter the animal name to remove.");
// var position = animals.indexOf(response);
// var result = animals.includes(response) ? animals.splice(position,1) : "Dosen't exist!!"; 

// console.log(result);
// console.log(animals);

// var friends = [["Riddhu", "Parth", "Yash"], [2016, 2017, 2018]];
// var response = prompt("Which friend you want to know?");    
// console.log("You met " + friends[0][response] + " in " + friends[1][response]);

// for(var i in animals){
//     console.log(i, animals[i]);
// }
// animals.forEach(function(item, index){
//     console.log(item, index);
// });


// OBJECT

// var object = {
//     color: "red",
//     make: "ford",
//     wheels: 4
// }

// // var response = prompt("Which property you wants to know?");

// // alert(object[response]);

// for(var x in object){
//     console.log(x, object[x]);
// }

// var friends = {
//     friend1:{
//         name: "Dhamo",
//         hair: "Black",
//         eyes: "Blue"
//     },
//     friend2:{
//         name: "Riddhu",
//         hair: "Brown",
//         eyes: "Black"
//     }
// };
// friends.friend2.hair = "Blue";
// console.log(friends.friend1.name);
// console.log(friends.friend2.name);
// console.log("\n");


// for(var x in friends){
//     for(var i in friends[x]){
//         console.log(i, friends[x][i]);
//     }
//     console.log("\n");
// }

// // DOM 
// var output = document.getElementById("output");
//  output.innerText = "World <hr> Hey How are you??";

// var inputText = output.innerHTML;
// document.getElementById('value').value = inputText;

// var response = prompt("Enter the any text in prompt.");
// var hello = document.getElementById('hello');
// hello.innerHTML = response;

// LOGICAL STATEMENTS

// var usernames = ["Dharmik", "Riddhu", "Parth"];
// var response = prompt("Enter the username.");
// var output = document.getElementById("output");
//Ternary Operator
// usernames.indexOf(response)>-1 ? output.innerHTML = "Okay It is exist!" : output.innerHTML = "Opps! Doesn't exist!" 

// if-else Statement

// if(usernames.includes(response)){
//     output.innerHTML = "Yes " + response + " is exist in an array!";
//     var age = prompt("enter your age");
//     output.innerHTML += age>18 ? " and you are over 18" : " and you are under 18";
// }else{
//     output.innerHTML = "Nooooo " + response + " is not exist in an array!";
// }

// SWITCH Statement

// var response = prompt("Enter the activity.");
// var output = document.getElementById("output");

// switch(response){
//     case "Wake Up":
//         output.innerHTML = "8 AM";
//         break;
//     case "Lunch":
//         output.innerHTML = "12 PM";
//         break;
//     case "Dinner":
//         output.innerHTML = "7 PM";
//         break;
//     default:
//         output.innerHTML = "<h1> Opps! Wrong time to do! <h1>";
// }

//Coin program using if-else

// var response = prompt("Enter heads(1)/Tails(0) ");
// var result = (response == "heads") ? 1 : 0;
// console.log(result);
// var choice = Math.floor(Math.random()*2);
// console.log(choice);
// if(result == choice){
//     alert("Yeahhh! you guess right! It's " + choice);
// }else{
//     alert("Opps! you guessed Wrong! It's " + choice);
// }

//Magic 8 ball switch

// var answer = "";
// var response = prompt("Ask me anything");
// var randomNumber = Math.floor(Math.random()*6);
// console.log(randomNumber);
// var output = document.getElementById("output");
// switch(randomNumber){
//     case 0:
//         answer = "Play with cricket";
//         break;
//     case 1:
//         answer = "I'm Fine";
//         break;
//     default:
//         answer = "I don't have any idea about it";
// }
// output.innerHTML = "You asked me for " + response + "<br> I think about "+ answer;

// Rock Paper Sciccor game

// var response = prompt("Enter the choice Rock, Paper, Scissor");
// var randomNumber = Math.random();
// var output = document.getElementById("output");
// var choice;
// if(randomNumber < 0.34){
//     choice = "Rock";
// }
// else if(randomNumber < 0.67){
//     choice = "Paper";
// }
// else{
//     choice = "Scissor";
// }

// if(response.charAt(0).toUpperCase() == choice.charAt(0).toUpperCase()){
//     output.innerHTML = "Result is Tie" + "<br> Compuet Choice " + choice + " <br> Player choice" + response;
// }
// else{
//     if(response.charAt(0).toUpperCase=="P"){
//         if(choice.charAt(0).toUpperCase=="S"){
//             output.innerHTML = "Result is Computer wins!" + "<br> Compuet Choice " + choice + " <br> Player choice" + response;
//         }
//         else{
//             output.innerHTML = "Result is Player wins!" + "<br> Compuet Choice " + choice + " <br> Player choice" + response;
//         }
//     }
//     else if(response.charAt(0).toUpperCase=="R"){
//         if(choice.charAt(0).toUpperCase=="S"){
//             output.innerHTML = "Result is Palyer wins!" + "<br> Compuet Choice " + choice + " <br> Player choice" + response;
//         } else{
//             output.innerHTML = "Result is Computer wins!" + "<br> Compuet Choice " + choice + " <br> Player choice" + response;
//         }
//     }
//     else{
//         if(choice.charAt(0).toUpperCase=="P"){
//             output.innerHTML = "Result is Computer wins!" + "<br> Compuet Choice " + choice + " <br> Player choice" + response;
//         }
//         else{
//             output.innerHTML = "Result is Player wins!" + "<br> Compuet Choice " + choice + " <br> Player choice" + response;
//         }
//     }
// }

// console.log(randomNumber);


// LOOPS

// Do-While loop

// var response = prompt("Enter the value how many times you wants to continue loop");
// var output = document.getElementById("output");
// var x = 1;
// do{
//     if((x%2)==0){
//         output.innerHTML += x + "<br>";
//         x++;
//     }
//     else{
//         x++;
//     }
// }while(x<response);


//While loop

// var userResponse = prompt("Enter the secret Code.");
// var secret = "Ridhama@1316";
 
// while(userResponse != secret){
//     var userResponse = prompt("Try Again!!");
// }

// document.write("Final output: " + userResponse);

//For loop
// var userResponse = prompt("Enter the secret Code.");
// var secret = "Ridhama@1316";
 
// for(var i=0; i<10; i++){
//     document.write("value of x = " + i+ "<br>" );
// }

// document.write("Final output: " + userResponse);

//Nested loops for creating table
// var html = "<table>";
// for(var row = 0; row<5; row++){
//     // if(row == 3){
//     //     break;
//     // }
//     html += "<tr>";
//     console.log(html)
//     for(var col = 0; col<5; col++){
//         html += "<td> Cell = " + ((col+1)+(row*5)) +"</td>";
//     }
//     html += "</tr>";
// }
// html+="</table>";
// var output = document.getElementById('output');
// output.innerHTML = html;
var output = document.getElementById('output');
// multiples of 5 in 1 to 1000
// var total = 0;
// for(var i=1; i<1000; i++){
//     if(i%5 == 0){
//         total += i;
//     }
// }

// console.log(total);


// arr = [1,2,3,4,5,6,7,8,9];
// for(var i = arr.length; i>0; i--){
//     output.innerHTML += i + "<br>";
// }
// output.innerHTML +=  "<br>";
// for(i of arr){
//     output.innerHTML += i + "<br>";
// }


// var object = {
//     name: "Dharmik",
//     age: "30",
//     hair: "black"
// }

// for(i in object){
//     console.log(i, object[i]);
// }


// var shoppingList = [];
// var total = prompt("How many items you wants to add in shopping list?");

// for(var i =0; i<total; i++){
//     var addItem = prompt("Enter the item you wants to add");
//     if(addItem == "no"){
//         break;
//     }
//     shoppingList.push(addItem);
// }
// var html = "<ol>";
// for(i of shoppingList){
//     html += "<li>" + i + "</li>";
// }
// html += "</ol>";

// output.innerHTML = html;


//Functions
// array = ["Super", "Wonderful", "Fine"];
// function display(){
//     var response = prompt("Enter name");
//     var randomNumber = Math.floor(Math.random()*array.length);
//     output.innerHTML += array[randomNumber] + " " + response + "<br>"
// }

// var result = display();
// output.innerHTML = result;

//Calculator

var numberOne = document.getElementById('number1');
var numberTwo = document.getElementById('number2');

// function Addition(){
//     var ans = Number(numberOne.value) + Number(numberTwo.value)
//     output.innerHTML += Number(numberOne.value) + " + " +  Number(numberTwo.value) + " = " + ans + "<br>";
// }

// function Substraction(){
//     var ans = Number(numberOne.value) - Number(numberTwo.value)
//     output.innerHTML += Number(numberOne.value) + " - " +  Number(numberTwo.value) + " = " + ans+ "<br>";
// }
// function Multiplication(){
//     var ans = Number(numberOne.value) * Number(numberTwo.value)
//     output.innerHTML += Number(numberOne.value) + " * " +  Number(numberTwo.value) + " = " + ans+ "<br>";
// }
// function Division(){
//     var ans = Number(numberOne.value) / Number(numberTwo.value)
//     output.innerHTML += Number(numberOne.value) + " / " +  Number(numberTwo.value) + " = " + ans+ "<br>";
// }
// var fun = document.getElementById('function');

// function myFunction(paramerter = "Hello World"){
//     fun.innerHTML =  paramerter;   
// }

// myFunction("Dharmik");

// var array = [];
// var inputOne = document.getElementById('value1');
// var inputTwo = document.getElementById('value2');
// var inputThree = document.getElementById('value3');

// for(var i=0; i<3; i++){
//     array.push(Math.floor(Math.random()*9));
// }

// fun.innerHTML = array + "<br>";

// var count = 0;  
// function checkCode(){
//     var guess = [inputOne.value,inputTwo.value,inputThree.value];
//     for(i=0; i<guess.length; i++){
//         fun.innerHTML += checkIn(array[i], guess[i]);
//     }
//     if(count == 3){
//         fun.innerHTML += " You are cracked the code";
//     }
// }

// function checkIn(userInput, randomInput){
//     if(userInput > randomInput){
//         return 'H';
//     }
//     if(userInput < randomInput){
//         return 'L';
//     }
//     else{
//         count++;
//         return userInput;
//     }
// }

//Annonymous Function

// var a  = function(hello){
//     document.write(hello);
// }

// a("Hello World!!");


// var secret = ["RiDhama@1316", "Dharmik@106", "DhamoPandav@1311"];
// var randomNumber;

// function secretCode(){
//     randomNumber = Math.floor(Math.random()*secret.length);
//     console.log(randomNumber);
//     testSecretCode(prompt("Enter the name"));
// }

// function testSecretCode(userInput){
//     if(userInput == secret[randomNumber]){
//         output.innerHTML = "Cracked it!!";
//     }
//     else{
//         testSecretCode(prompt("Guess Again!!"));
//     }
// }

// array = ["HTML", "CSS3", "Website", "MySql"];

// function suffle() {
//     output.innerHTML += changePosition(array) + "<br>";
// }

// function changePosition(array) {
//     for(i=array.length-1; i>0; i--){
//         var holder = Math.floor(Math.random()*(i+1));
//         var temp = array[i];
//         array[i] = array[holder];
//         array[holder] =temp;
//     }
//     return array;
    
// }

// var array = ["sds", "dss", "122", "232", "dss", "122","232","sds"];
// var cleanarray = remove(array);

// function remove(array) {
//     var cArray = [];
//     var object={};
//     for(var i=0; i<array.length; i++){
//         object[array[i]] = "dsdsd";
//         console.log(object)
//     }

//     for(i in object){
//         cArray.push(i);
//     }
//     console.log(cArray);
//     return cArray;
// }

//Function within a function
// var a=10;
// function outside(){
//     var b = 11;
//     function inside(){
//         b++;
//         return b;
//     }
//     inside();
//     var c = inside();
//     console.log("Value of C: " + c);
//     var d = function(){
//         b++;
//         return b;
//     } 
//     console.log("Value of D: " + d());
// }

// outside();


// var items = [];
// var inputItem = document.getElementById("inputItem");
// var shoppingList = document.getElementById('shoppingList');
// function shopping(){
//     items.push(inputItem.value);
//     console.log(items);

    
//     display(items); 
// }
// function display(items){
//     html = "<ol>";
//     for(i of items){
//         html+= "<li>" + i + "</li>";
//     }
//     html += "</ol>";   

//     shoppingList.innerHTML = html;
// }
// html = "";


// function fun1(s1, s2, callback){
//     var result = callback(s1,s2);
//     output.innerHTML = result;
// }

// fun1("Hello ", "World ", function(s1, s2){
//     var result2  = s1 + s2 + "How are you??";
//     return result2; 
// });


// //Calculator using callback function...
// function Addition(){
//     outC(Number(numberOne.value),Number(numberTwo.value),"+",function(a,b){
//         return a+b;
//     });
// }
// function Substraction(){
//     outC(Number(numberOne.value),Number(numberTwo.value),"-",function(a,b){
//         return a-   b;
//     });
// }

// function outC(a,b,s,cback){
//     var result = cback(a,b);
//     output.innerHTML += a + " " + s + " " + b + " = " + result; 
// }

// for(i in window){
//     document.write(i + " : " + window[i] + "</br>");
// }
 
// console.log(window.innerHeight);
// var w = window.open('1.html');
// w.onbeforeunload = function(){
//     alert("Don't go anywhere!");
// }

function back(){
    window.history.go(-1);
}

//**************************************Set Timeouts*********************
//  var timer;
// function startInterval(){
//     timer = window.setTimeout(myPopUp, 2000);
// }

// function stopInterval(){
//     window.clearInterval(timer);
// }

// function myPopUp(){
//     alert('Hello welcome t my PopUp.');
// }

// window.setInterval(myUpdated, 5000);``
// function startInterval(){
//     timer = window.setTimeout(myPopUp, 1000);
// }

// function stopInterval(){
//     window.clearInterval(timer);
// }

// function myUpdated(){
//     output.innerHTML = "<h1>Welcome to my webpage </h1>";
// }

// function goUrl(inputValue){
//     // var input = document.getElementById('input');
//     window.location = inputValue;
// }

// function formValue(){
//     var input = document.myForm.url.value;
//     window.location = input;
// }
//  function myFun(t){
//      output.innerHTML = t.value;
//  }

//  var clicking1 = document.getElementById('clicking1');
//  var clicking2 = document.getElementById('clicking2');

//  clicking1.onclick = function(){
//      output.innerHTML = "Clicked";
//      clicking1.value = "Clicked it!";
//  }

//  function myFunction(){
//      output.innerHTML = "welcome to my webpage"
//  }

//  function change(t){
//      t.src = "https://via.placeholder.com/150/00EEAA/808080?text=Image2";
//      output.innerHTML = t.src;
//  }

//  function revert(t){
//     t.src = "https://via.placeholder.com/150/0000FF/808080?text=Image1";
//     output.innerHTML = t.src;
//  }

//  var imageHolder = "https://via.placeholder.com/150/00EEAA/808080?text=Image10";
//  window.onload = function(){
//     document.getElementById('image').src = imageHolder;
//  }

//  function onChange(){
//      var onchange = document.getElementById('onchange');
//      value = event.target;
//      if(value.name == "firstInput"){
//         onchange.innerHTML = value.value;
//      }
//      if(value.name == "secondInput"){
//         onchange.innerHTML = value.value;
//      }
//  }

//  var icolor = "0000FF";
//  var iText = "Image1";
//  var iSize = "350x50";
//  function placeHolder(){

//     if(event.target.type == "select-one"){
//         iSize = event.target.value;
//     }else if(event.target.type == "text"){
//         iText = event.target.value;
//     }else if(event.target.type == "color"){
//         var nColor = (event.target.value);
//         iColor = nColor.replace("#","").toUpperCase();
//         console.log(iColor);
//     }   
                   
//     var imageSrc = "https://via.placeholder.com/" + iSize + "/" + icolor + "/808080?text="+ iText;
//     console.log(imageSrc);
//     event.target.parentElement.image.src = imageSrc;
//  }

// var image = dcument.getElementById('myImage');

var imagePlace = 0;
var images = ["0", "1", "2", "3", "4"];
var imageColor = ["111", "222", "0000FF", "FF000A","333"];

function startImage(){
    setInterval(swapingImage, 2000);
}

function swapingImage(){
    
    imagePlace++;
    if(imagePlace>=images.length){
        imagePlace =0;
    }
    var image = document.getElementById('myImage');
    image.src = "https://via.placeholder.com/350x50/" + imageColor[imagePlace] + "/808080?text="+ images[imagePlace ];
}


//Drag and Drop
var holder;
function dStart(){
    holder = event.target;
    console.log("Dragged Started!");
} 
function dDrop(){
    event.preventDefault();
    console.log("Dropped!!");
    if(event.target.className == "box"){
        event.target.appendChild(holder);
    }
} 
function nDrop(){
    event.preventDefault();
}

var peoples = ["Dharmik", "Riddhu", "Yash", "Parth"];
var myArray = [];
var output = document.getElementById('output');
function start(){
    myArray = peoples.sort(function(){
        return 0.5-Math.random();
    });
    console.log(myArray);
    buildGame(myArray);
}

function buildGame(myArray){
    var html;
    for(i in myArray){
        var string = myArray[i];
        var shuffled = string.split("").sort(function(){
            return 0.5-Math.random();
        }).join("");
        html += "<div class=\"box\"> Hidden" + i +  "</div>";
    }
    output.innerHTML = html;
}

function onClick(){
    var highlightList = document.getElementsByClassName('highlight');
    var output = document.getElementById('output');
    var html="";

    for(i=0; i<highlightList.length; i++){
        if(highlightList[i].innerText){
            html += highlightList[i].innerText + "<br>";
        }else if(highlightList[i].value){
            html += highlightList[i].value + "<br>";
        }
        
    }

    output.innerHTML = html;
}

// var output = document.getElementById('output');
var one = document.getElementsByClassName('one');
// console.log(one);

// for(i =0; i<one.length; i++){
//     var element = one[i];
//     console.log(element);   
//     element.onclick = function(){
//         output.innerHTML = element.innerHTML;
//     }
// }


var querySelectorAll = document.querySelectorAll('.new .one');
// console.log(querySelectorAll);

for(i=0; i<querySelectorAll.length; i++){
     querySelectorAll[i].innerHTML = "It Worked!";
}


var bgColors = ["purle", "blue", "green","yellow", "orange", "red"];
var output = document.querySelectorAll('.output');
numbers = output.length;

function start(){
    setInterval(swapping, 2000);
}

function swapping(){
    var output = document.querySelectorAll('.output');
    for(var i=0; i<numbers; i++){
        color = bgColors[Math.floor(Math.random()*bgColors.length)];
        output[i].style.backgroundColor = color;
    }   
}

var overLay = document.getElementById('overlay');
var button = document.getElementById('button');
var counter=0;
button.onclick = function(){
        overLay.style.visibility = overLay.style.visibility == "visible" ? "hidden" : "visible";
}

var output1 = document.querySelectorAll('.output1');
console.log(output1)

for(var i=0; i<output1.length; i++){
    output1[i].onclick = function(){
        this.classList.toggle('output2');   
    }
}  

var acc = document.querySelectorAll('.acc');
console.log(acc);
for(var i=0; i<acc.length; i++){
    acc[i].onclick = function(){
        // console.log("this is : " + this.nextElementSibling.innerHTML);    
        this.nextElementSibling.classList.toggle('active');
    }
}

var myArray = ["Dharmik", "Parth", "Yash", "Nishtha", "Bhumika"];

var table= document.getElementById('table');

// document.onload = build();

var button1 = document.getElementById('buttons');

// var input = document.getElementById('addnew');
// myArray.push(input.value);
button1.onclick =function(){
    var input = document.getElementById('addnew');
    myArray.push(input.value);
    console.log(myArray);
    build();
}

function build(){
    var html="<h1> Welcome to my table: </h1><table>";

    for(i=0; i<myArray.length; i++){
        html += '<tr data-row="' + i + '"data-vote="0"><td class="box1">' + myArray[i] + '</td><td  class="box1">' + (i+1) + '</td><td class="box1">0</td></tr>';
    }
    table.innerHTML = html;

    var tableContent = document.querySelectorAll('#table .box1');
    console.log(tableContent);
    var b=0;
    for(var i=0; i<tableContent.length; i++){
        tableContent[i].onclick = function(){
            a= this.parentElement.getAttribute('data-row');
            b = Number(this.parentElement.getAttribute('data-vote'));
            console.log(myArray[a]);
            b++;
            this.parentElement.lastElementChild.innerText = b;
            this.parentElement.setAttribute('data-vote',b);
        }
    }
}
var input = document.getElementById('addnew');
input.addEventListener('select', selection);

function selection(){
    var str = event.target.value;
    console.log(str.substring(event.target.selectionStart, event.target.selectionEnd));
}

var pop = document.getElementById('pop');
var close = document.getElementById('close');
var windows;
pop.addEventListener('click', function(){
    var url="index1.html";
    windows = window.open(url,"_blank","top=20, left=300, height=400, width=400");
});
close.addEventListener('click',function(){
    windows.close();
});

var s = document.getElementById('value');
var message = document.getElementById('message');
function fun(){
    var m = s.value;
    ms = message.innerText;
    console.log(m);    
    ms = ms.replace("Javascript", m);
    message.innerText = ms;
}

var words = ["jacascript", "HTML", "CSS", "Python"];
// window.onload = sword();

// function sword(){
//     var scrambled= words[Math.floor(Math.random()*words.length)];       
//     console.log(scrambled);
// }


// function myFunction(){
//     var str= "Hello how re you? I am Learning JavaScript! javaScript if a Scripting language";
//     var p = /javascript/ig;
//     var result = str.match(p);
//     result.forEach(function(e){
//         console.log(e);
//     });
//     console.log(str.match(p));
// }

function myFunction(){
    var sText = document.getElementById('sText').value;
    var rText = document.getElementById('rText').value;
    var replace  =document.getElementById('replace').innerText;

    var regex = new RegExp(sText,'ig');
    console.log(regex);

    var result = replace.match(regex);
    console.log(result);

    if(result){
        replace = replace.replace(regex, rText);
        document.getElementById('replace').innerText = replace;
    }
   
}


var file = document.getElementById('file');
var abcd = document.getElementById('abcd');
if(window.FileReader){
    abcd.innerHTML = "File Reader is available."
}else{
    abcd.innerHTML = "File Reader is available.";
}
function fileReader(files){
    for(var i=0; i<files.length; i++){
        var fReader = new FileReader();
        var fName = files[i].name;
        fReader.onload = function(e){
            abcd.innerHTML += '<br>' + fName;
            abcd.innerHTML += e.target.result;
            console.log(e.target.result);
        }
        fReader.readAsText(files[i]);
    }
}



window.onload = init;

function init(){
    navigator.geolocation.getCurrentPosition(placemap);
}

function placemap(data){
    console.log(data);
}


var message="hello world";
var count=0;
if(localStorage.getItem('test1')){
    document.getElementById('localStorage').innerHTML = localStorage.getItem('test1');
}
if(localStorage.getItem('count1')){
    var count = Number(localStorage.getItem('count1'))+1;
    localStorage.setItem('count1',count);
    document.getElementById('localStorage').innerHTML += count ;
}else{
    localStorage.setItem('count1', 0);
}

localStorage.setItem('test1', message);

var myObj = {
    "message" : "HELLO",
    "count" : 1
}
var myStr = JSON.stringify(myObj);

if(localStorage.getItem('msg')){
    var myObj2 = JSON.parse(localStorage.getItem('msg'));
    document.getElementById('localStorage').innerHTML = myObj2.message + myObj2.count;
    myObj2.count = Number(myObj2.count)+1;
    myObj = {
        "message" : "Updated",
        "count" : myObj2.count
    }
    myStr = JSON.stringify(myObj);
}

localStorage.setItem('msg', myStr);


//JSON AND AJEX
var party = JSON.parse(data);
var addButton = document.querySelector('input[type="button"]');

addButton.addEventListener('click', function(e){
    var guestName = document.getElementById('guestName');
    var guestNumber = document.getElementById('guestNumber');
    message1("X", guestName.value + '+' + guestNumber, party.length);
    party.push({
        name: guestName,
        guest: guestNumber,
        status: flase   
    })
    guestName.value ="";
    guestNumber = 0;
})

function message1(m, person, id){
    document.getElementById('message1').innerHTML = '<div class="toggle" data-id="' + id + '" data-person="' + person + '" ><span>' + m + '</span>' + person +  '</div>';
}

//AIzaSyDA-rgjxAh9mSZEqsLPmmDY9t3m0J95AoY
//https://www.googleapis.com/youtube/v3/search/?key=AIzaSyDA-rgjxAh9mSZEqsLPmmDY9t3m0J95AoY&q=test

//https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyDA-rgjxAh9mSZEqsLPmmDY9t3m0J95AoY&q=test&maxResult=20


window.onload = init;
function init(){
    var searchYouTube = document.getElementById('searchYouTube');
    var search = document.getElementById('search');
    search.addEventListener('click', ySearch, false);
}

function ySearch(){
    var searchYouTube = document.getElementById('searchYouTube');
    var url = "https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyDA-rgjxAh9mSZEqsLPmmDY9t3m0J95AoY&q=test&maxResult=20";
    getJSON(url, function(data){
        console.log(data);
    })
}

function myFun(a,b,...c){
    console.log(arguments)
    console.log(c)
    for(let i=0; i<c.length; i++){
        console.log(c[i]);
    }
}

myFun(1,2,3,4,5,6,6,7);

var message = (value) =>{
    let a= "worlds";
    console.log(value + ' ' + a);
}
message("Hello")

var message1 = value => "hello "  + value
console.log(message1("hello"));

var message2 = value => {
    console.log( "hello " + value);
}
message2("Dharmik")
// console.log(message2("Dharmik"))

function* pgGenerator(){
    let abcd=0;
    while(abcd<10){
        yield abcd++;
    }
}

var pg  = pgGenerator();

for(let d=0; d<10; d++){
    var holder = pg.next()
    if(holder.done){
        break;
    }
    console.log(holder.value)
}
// console.log(pg.next());
// console.log(pg.next());
// console.log(pg.next());
// console.log(pg.next());

let sets = new Set();

sets.add("Dharmik <3 Riddhi")
sets.add("They pruposed on 10th november!")
sets.add("And try to get merried in 2021");

sets.forEach(function(e){
    console.log(e); 
})

var a=[1,2,3,4,1,2,5,1,2,6,7,2,4];
function remove(arr){
    return [ new Set(arr) ];
}
var d= remove(a);
for(i in d){
    console.log(d[i]);
}

var myArr = [1,2,3,4,5,6,7,8,9];
let answers = myArr.map(value=> value*10);
console.log(answers)

let myMap = new Map();

myMap.set("Hello", "world");
myMap.set(1, "DHarmik")
console.log(myMap.get("Hello"))
console.log(myMap.has("Hello"))
console.log(myMap.delete("Hello"))
console.log(myMap)

var newArray = [2,3,4,5,78,56,4,3,2,50];
var answerArray = newArray.find(x => x>50);
console.log(answerArray);

function makeArray(){
    return Array.from(arguments)
}

 var d = makeArray("Hello", "World", "How are you??");
 console.log(d)
 console.log(d.findIndex(x => x=="World"));

 class makeName{
    constructor(first, last){
        this.firstName = first;
        this.lastName = last;
    }
    complete(){
        console.log(this)
        console.log(this.firstName, this.lastName);
    }
 }

 let newName = new makeName("DHarmik", "Pandav");
 newName.complete();