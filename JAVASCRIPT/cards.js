var output = document.getElementById('output');

var suits = ["spades","hearts", "clubs","diams"];
var cardFace = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
var players = [];
var cards = [];

function Startgame(){
    players = [];
    cards = [];
    var numberOfPlayers = document.getElementById('players');
    for(var i=0; i<numberOfPlayers.value; i++){
        players[i] = [];
    }
    buildCards();
    console.log(cards);
    shuffleCards(cards);
    console.log(cards);
    dealCards(cards);
    console.log(players);
}

function buildCards(){
    for(s in suits){
        var bgColor = (suits[s] == "hearts" || suits[s]=="diams") ? "red" : "black";
        for(c in cardFace){
            var card = {
                number : cardFace[c],
                suit : suits[s],
                bgColor : bgColor
            }
            cards.push(card);
        }
    }
}

function shuffleCards(cards){
    for(var i= cards.length-1; i>1; i--){
        var holder = Math.floor(Math.random()*(i+1));
        var temp = cards[i];
        cards[i] = cards[holder];
        cards[holder] = temp;
    }
}

function dealCards(cards){
    var number = players.length;
    var p=0;
    for(var i=0; i<cards.length; i++){
        players[p].push(cards[i]);  
        p++; 
        if(p>=number){
            p=0;
        }
    }   
    for(var i=0; i<number; i++){
        output.innerHTML += "<br> Player " + (i+1) + "<br>";
        for(var x=0; x < players[i].length; x++){
            p = players[i][x]; 
            output.innerHTML += "<span style=\"color: " + p.bgColor + "\">" + p.number + "&"+ p.suit +";</span>" ;
        }
        output.innerHTML += "<br>";
    }
}
