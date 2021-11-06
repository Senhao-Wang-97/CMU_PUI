//Get Cart Item
var cart = []
if (localStorage.getItem("cart")){
  cart = JSON.parse(localStorage.getItem("cart"))
}

//Code for shoppingcart selection
var current_color = '';
var current_fill = '';

var dict = {
  'color-1': "After School Special",
  'color-2': "Morning Haze",
  'color-3': "Cozy Denim",
  'color-4': "Rainy Day",
  'fill-1': "Duck Down",
  'fill-2': "Poly-Blend",
  'fill-3': "Memory Foam"
};

updateCounter();

function add_item(){
  cart.push({type: "Bed Pillow", color: current_color, fill: current_fill, num: 1});
  storetoLocal()
  updateCounter();
}


function storetoLocal(){
  var dataString = JSON.stringify(cart)
  console.log(dataString)
  localStorage.setItem("cart", dataString)
}

function updateCounter(){
  var total = 0
  for (var i = 0; i < cart.length; i++){
    total += cart[i].num || 0
  }

  document.getElementById('num-in-cart').innerHTML = total;
}

//Code for color selection
var colorChoice = document.getElementsByClassName("color-select");

var myFunction = function() {
    for (var i = 0; i < colorChoice.length; i++){
      colorChoice[i].style.border = "#E6E6E6 solid 3px";
    };
    this.style.border = "#3F3F3F solid 3px";
    current_color = this.id
};

for (var i = 0; i < colorChoice.length; i++) {
    colorChoice[i].addEventListener('click', myFunction, false);
};

//Code for selecting the materials
var textureChoice = document.getElementsByClassName("img-preview");

var myFunction = function() {
    console.log(this.id)
    for (var i = 0; i < textureChoice.length; i++){
      textureChoice[i].style.outline = "";
    };
    this.style.outline = "#3F3F3F solid 3px";
    current_fill = this.id
};

for (var i = 0; i < textureChoice.length; i++) {
    textureChoice[i].addEventListener('click', myFunction, false);
};
