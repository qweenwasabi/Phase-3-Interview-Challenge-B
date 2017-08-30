var cart = document.getElementById("cart-item-count");
var cartNumber = cart.textContent;
var sliceNumber = cartNumber.slice(1,2);



var plus1 = Number(sliceNumber);

function addToCartCount(){
   plus1++;
   cart.textContent = "("+ plus1 + ")"
  return plus1;
}

var modal = document.getElementById("popUp");
var cartButton = document.getElementById("cart-button");
cartButton.onclick = function() {
  var grandTotal = document.querySelector('.modal .modal-footer .total-price');
  grandTotal.innerText = '$ ' + calcTotalPrice();
    modal.style.display = "block";
     cartItemList()
}
var exit = document.getElementsByClassName("close")[0];
exit.onclick = function() {
    modal.style.display = "none";
}

var cartItems = []
var itemsPrice = []


function calcTotalPrice() {
  return itemsPrice.reduce(function (sum, price) {
    return Math.round((sum + price)*100)/100;
  }, 0)
}

function addToCart(item, price) {
  cartItems.push(item)
  itemsPrice.push(price)
}

function cartItemList() {
  document.getElementsByClassName('itemInCart')[0].innerHTML = ''
  document.getElementsByClassName('ItemPriceInCart')[0].innerHTML = ''
  var itemInCart = document.getElementsByClassName('itemInCart')[0]
  var ItemPriceInCart = document.getElementsByClassName('ItemPriceInCart')[0]

  for (var i = 0; i < cartItems.length; i++) {
    var modalItem = document.createElement('li')
    var modalPrice = document.createElement('li')
    modalItem.innerText = cartItems[i]
    modalPrice.innerText = '$' + itemsPrice[i]
    itemInCart.appendChild(modalItem)
    ItemPriceInCart.appendChild(modalPrice)
  }
}

function clearCart() {
  plus1 = 0
  cartItems = []
  itemsPrice = []
  cart.innerHTML = `(${plus1})`
  modal.style.display = 'none'
}
