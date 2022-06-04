window.onload = init;

function init(){
    document.getElementById('serachButton').addEventListener('click', ySearch);
}
//Client iD: 830151333036-9eq3p5tnd99jgqt13it63jm4qle4ub9u.apps.googleusercontent.com
//Client Secret: VwzjnmVAL978RvInc14CNKii
//AIzaSyCiPGb6_1KIAlwgnQOqi3m8Ka4TONQCGfQ
function ySearch(){
    var inputText = document.getElementById('inputText');
    var url = "https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyCiPGb6_1KIAlwgnQOqi3m8Ka4TONQCGfQ&q=" + inputText+ "&maxResults=20";

    getJSON(url, function(data){
        showResults(data.items);
    });
    
}

function showResults(results){
    var html ='';
    for(var value in results){
        var title = results[value].snippet.title;
        var description = results[value].snippet.description;
        var imgSrc = results[value].snippet.thumbnails.medium.url;
        var videoId = results[value].id.videoId;
        console.log(videoId)
        html += '<div><h3>' + title + '</h3><img src="' + imgSrc + '" <br><p>' + description + '</p>        </div><hr>';
    }
    console.log(results)
    document.getElementById('output').innerHTML = html;
}

function getJSON(url, callback){
    var xHR = new XMLHttpRequest;
    xHR.open('GET', url, true);
    xHR.responseType = 'json'; // it is manddatory for getting JSON data
    xHR.onload = function(){
        if(xHR.status==200){
            callback(xHR.response);
        }
    }
    xHR.send();
}