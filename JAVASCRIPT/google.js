
var m = document.getElementById('map');
window.onload = init;

function init(){
    navigator.geolocation.getCurrentPosition(placemap);
}

function placemap(data){
    var options ={
        center:{
            lat: data.coords.latitude,
            lng: data.coords.longitude        
        },
        zoom: 5
    }
    var map = new google.map.Map(m, options);
}