//Get Cart Item
var cart = []

if (localStorage.getItem("cart")){
  cart = JSON.parse(localStorage.getItem("cart"))
  console.log(cart);
  sortStorage();
}



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

//Adding Event listener, and assign item id
for (var i = 0; i < cart.length; ++i){
  cart[i].id = i
  addItemToCart(cart[i].color, cart[i].fill, cart[i].num, cart[i].id)
  add_delete_listener()
  add_add_listener()
  add_minus_listener()
}

function add_delete_listener(){
  var removeCartItemButtons = document.getElementsByClassName("delete-icon")
  for (var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i];
    button.setAttribute("id","button_"+i)
    button.addEventListener('click', delete_row)
  };
}

function delete_row(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.parentElement.remove()
  updateStorageOnDelete(buttonClicked.id)
}

function updateStorageOnDelete(delete_id){
  console.log(delete_id)
  index_to_delete = delete_id.split('_')[1];

  var i = cart.length

  while(i--){
    if (cart[i].id == index_to_delete){
      cart.splice(i, 1)
    }
  }
  storetoLocal()
  updateCounter()
}

function addItemToCart(color,fill,num,id){
  var cartRow = document.createElement('div');
  cartRow.classList.add('item-detail');
  var cartContents = `
    <img src='./Asset/checkout_asset/pillow_2.png' class="item-detail-preview" alt="Bed Pillow">
    <div class="check-out-detail-right">
      <div class="checkout-title">
        <h5>Bed Pillow</h5>
        <input type="image" src='./Asset/checkout_asset/delete.png' class="delete-icon" alt='delete icon'>
      </div>
      <div class="checkout-bottom">
        <div>
          <p class="des-subheading2">Material: ${dict[fill]}</p>
          <p class="des-subheading2">Color: ${dict[color]}</p>
        </div>
        <div>
          <p class="des-subheading2">$99.99</p>
          <div class='num-item'>
            <p class="des-subheading2" id=quant_${id} >Quantity: ${num}</p>
            <input type='image' class='add-item' src="./Asset/checkout_asset/Add.png">
            <input type='image' class='minus-item' src='./Asset/checkout_asset/minus.png'>
          </div>
        </div>
      </div>
    </div>`
  cartRow.innerHTML = cartContents
  cartItems = document.getElementsByClassName('pillows-checkout-container')[0]
  cartItems.append(cartRow)
}


function storetoLocal(){
  var dataString = JSON.stringify(cart)
  localStorage.setItem("cart", dataString)
}


function sortStorage(){
  for (var i = 0; i < cart.length; i++){
    for (var k = i+1; k < cart.length; k++){
      if(cart[i].color == cart[k].color && cart[i].fill == cart[k].fill){
        console.log(cart[i],cart[k])
        cart[i].num = cart[i].num + cart[k].num;
        cart[k].num = 0;
      }
    }
  }
  var i = cart.length;
  while(i--){
    if (cart[i].num == 0){
      cart.splice(i, 1)
    }
  }
}


function updateCounter(){
  var total = 0
  for (var i = 0; i < cart.length; i++){
    total += cart[i].num
  }
  document.getElementById('num-in-cart').innerHTML = total;
}


function add_add_listener(){
  var addItemButtons = document.getElementsByClassName("add-item")
  for (var i = 0; i < addItemButtons.length; i++){
    var button = addItemButtons[i];
    button.setAttribute("id","add_"+i)
    button.addEventListener('click', add_item)
  }
}

function add_item(event){
  var buttonClicked = event.target
  console.log(buttonClicked.id)
  index_to_change = buttonClicked.id.split('_')[1];
  for (var i = 0; i < cart.length; i++){
    if (cart[i].id == index_to_change){
      cart[i].num += 1
      quant = cart[i].num
    }
  }
  updateCounter()
  storetoLocal()
  updateSmallText(index_to_change, quant)
}

function add_minus_listener(){
  var minusItemButtons = document.getElementsByClassName("minus-item")
  for (var i = 0; i < minusItemButtons.length; i++){
    var button = minusItemButtons[i];
    button.setAttribute("id","minus_"+i)
    button.addEventListener('click', minus_item)
  }
}

function minus_item(event){
  var buttonClicked = event.target
  index_to_change = buttonClicked.id.split('_')[1];
  for (var i = 0; i < cart.length; i++){
    if (cart[i].id == index_to_change && cart[i].num > 1){
      cart[i].num -= 1
      quant = cart[i].num
    }
  }
  updateCounter()
  storetoLocal()
  updateSmallText(index_to_change, quant)
}

function updateSmallText(index, quant){
  document.getElementById('quant_'+index).innerHTML = "Quantity: "+ quant;
}
