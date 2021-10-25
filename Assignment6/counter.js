//Code for shoppingcart selection
var count = 0;

updateCounter();

function add_item(){
  count++;
  console.log("clicked");
  updateCounter();
}

function updateCounter(){
  document.getElementById('num-in-cart').innerHTML = count;
}



//Code for color selection
var colorChoice = document.getElementsByClassName("color-select");

var myFunction = function() {
    console.log(this.id)
    for (var i = 0; i < colorChoice.length; i++){
      colorChoice[i].style.border = "#E6E6E6 solid 3px";
    };
    this.style.border = "#3F3F3F solid 3px";
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
};

for (var i = 0; i < textureChoice.length; i++) {
    textureChoice[i].addEventListener('click', myFunction, false);
};
