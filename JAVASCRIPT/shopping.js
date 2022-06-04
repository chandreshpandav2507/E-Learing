var output = document.getElementById('output');
var tableContent = document.getElementById('table-content');
var items = [
    {
        name: 'iPhone',
        detail: 'Silver',
        cost: 1500
    },
    {
        name: 'LCD',
        detail: '32 inch Black',
        cost: 1700
    },
    {
        name: 'Cable',
        detail: 'WHiile 1m',
        cost: 5
    },
    {
        name: 'Machine',
        detail: 'Automatic',
        cost: 50
    }
];

var html ='<br>';
var shopCart=[];
window.onload = init;

function init(){
    buildItems();
    var q = document.querySelectorAll('.productitem');
    for(var i=0; i<q.length; i++){
        q[i].addEventListener('click', function(e){
            e.preventDefault();
            addToCart();
        })
    }
}

function addToCart(){
    var itemInfo = event.target.dataset;
    var iteminCart = false;
    itemInfo.qty = 1;
    console.log(itemInfo.id);
    shopCart.forEach(function(e){
        console.log(e.id);
        if(e.id == itemInfo.id){
            e.qty = parseInt(e.qty) + parseInt(itemInfo.qty);
            iteminCart = true;
        }
        if(!iteminCart){
            shopCart.push(itemInfo);
        }
    });    
    localStorage.setItem('scart', JSON.stringify(shopCart));
    outputCart();
}

function outputCart(){
    if(localStorage.getItem('scart')!=null){
        var shopCart = JSON.parse(localStorage.getItem('scart'));
    }
    var html = '<table>';
    var total=0;
    shopCart.forEach(function(e){
        var stotal = e.qty * e.price;
        total +=  stotal;
        html +=  '<tr><td>' + e.name + '</td><td>' + total + '</td></tr>';
    })

    html+='</table>';
    tableContent.innerHTML = html;
}

function buildItems(){
    var x= 0;
    items.forEach(function(v){
        html += '<div class="item"><h3>' + v.name + '</h3><img alt="No Image" src="https://via.placeholder.com/350x150?text=Visit+Blogging.com+Now"><div>' + v.detail+ '<a href="#" class="productitem" data-name="' + v.name + '" data-detail="' + v.detail + '" data-price="'+ v.cost + '" data-id="' + x + '"> Add to cart </a></div></div>';
        x++;
    })

    var output = document.getElementById('output');
    output.innerHTML += html;
}