var removeCartItemButtons = document.getElementsByClassName('btn-danger')
for (var i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i]
  button.addEventListener('click', function (event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
  })
}
var AddFavItemButtons = document.getElementsByClassName('AddToFavButton')
for (var i = 0; i < AddFavItemButtons.length; i++) {
  var button = AddFavItemButtons[i]
  button.addEventListener('click', AddToFavClicked)
}
function AddToFavClicked(event) {
  var button = event.target;
  var FavItem = button.parentElement.parentElement.parentElement;
  console.log(FavItem); 
  var title = FavItem.getElementsByClassName('title')[0].innerText;
  var price = FavItem.getElementsByClassName('price')[0].innerText;
  var Imagesrc = FavItem.getElementsByClassName('img')[0].src;
  console.log(title, price, Imagesrc);
  addItemToFav(title, price, Imagesrc);     
}
function addItemToFav(title, price, image) {
  // retrieve the fav items from localStorage
  var FavItems = JSON.parse(localStorage.getItem('favItems')) || [];
  // check if the item is already in the fav items
  var itemIndex = -1;
  for (var i = 0; i < FavItems.length; i++) {
    if (FavItems[i].title === title) {
      itemIndex = i;
      break;
    }
  }
  // if the item is not already in the fav items, add it
  if (itemIndex === -1) {
    var newItem = { title: title, price: price, image: image};
    FavItems.push(newItem);
    localStorage.setItem('favItems', JSON.stringify(FavItems));   
  }
}
function displayFavItems() {
  // retrieve the cart items from localStorage
  var FavItems = JSON.parse(localStorage.getItem('favItems')) || [];
  // get a reference to the cart-items div
  var FavItemsDiv = document.getElementById('fav');
  FavItemsDiv.innerHTML = ''; // clear the cart items div
  // create the cart items container div
  var FavItemsContainer = document.createElement('div');
  FavItemsContainer.classList.add('favorites-container'); // add a class to the container div
  FavItemsDiv.appendChild(FavItemsContainer); // append the container div to the fav items div
  // iterate over the cart items and create HTML elements for each one
  for (var i = 0; i < FavItems.length; i++) {
    // create a new container element for every third item
    if (i % 3 === 0) {
      var row = document.createElement('div');
      row.classList.add('row');
      FavItemsContainer.appendChild(row);
    }
    var item = FavItems[i];
    var FcartRow = document.createElement('div');
    FcartRow.classList.add('favorites-section');
    var FavRowContents = `
    <section class="Favproducts" id="Favproducts">
    <h1 >Favorited Item</h1>
    <div class="Favbox-container">
        <div class="Favbox">
                <div class="Fimage">
                <img class="img" src="${item.image}" alt="">
                <div class="icons">
                    <button href="#" class="fas fa-heart-broken RemoveFavItem"></button>
                    <button  class="cart-btn addcart" >add to cart</button>
                </div>
            </div>
            <div class="Fcontent">
                <h3 class="Ftitle">${item.title}</h3>
                <div class="Fprice"> ${item.price} </div>
            </div>
        </div>
        </section>
    `;
    FcartRow.innerHTML = FavRowContents;
    // append the item element to the current row element
    var currentRow = FavItemsContainer.lastChild;
    currentRow.appendChild(FcartRow);
    var addToCartButton = FcartRow.getElementsByClassName('addcart')[0];
    addToCartButton.addEventListener('click', AddFavToCartClicked);
  }
  function AddFavToCartClicked(event){
    var button = event.target;
    var favItem = button.parentElement.parentElement.parentElement;
    var title = favItem.getElementsByClassName('Ftitle')[0].innerText;
    var price = favItem.getElementsByClassName('Fprice')[0].innerText;
    var imageSrc = favItem.getElementsByClassName('img')[0].src;
    addItemToCart(title, price, imageSrc);
  }
  // Add event listeners to "RemoveFavItem" buttons
  var RemoveFavItemButtons = document.getElementsByClassName('RemoveFavItem');
  for (var i = 0; i < RemoveFavItemButtons.length; i++) {
    var button = RemoveFavItemButtons[i];
    button.addEventListener('click', removeFavItem);
    var addToCartButton = FcartRow.getElementsByClassName('addcart')[0];
  addToCartButton.addEventListener('click', AddFavToCartClicked);
  }
function removeFavItem(event) {
  // Get the item's title from the DOM
  var title = event.target.parentElement.parentElement.parentElement.getElementsByClassName('Ftitle')[0].innerText;
  // Remove the item from the favorites in local storage
  var FavItems = JSON.parse(localStorage.getItem('favItems')) || [];
  for (var i = 0; i < FavItems.length; i++) {
    if (FavItems[i].title === title) {
      FavItems.splice(i, 1);
      break;
    }
  }
  localStorage.setItem('favItems', JSON.stringify(FavItems));
  // Update the favorites list on the page
  displayFavItems();
}
  // set the CSS display property of the row elements to grid and set the grid template columns to repeat(3, 1fr)
  var rows = document.getElementsByClassName('row');
  for (var i = 0; i < rows.length; i++) {
    rows[i].style.display = 'grid';
    rows[i].style.gridTemplateColumns = 'repeat(3, 1fr)';
  }
  // add event listeners to the AddToFav buttons
  var AddFavItemButtons = document.getElementsByClassName('AddToFavButton')
  for (var i = 0; i < AddFavItemButtons.length; i++) {
    var button = AddFavItemButtons[i]
    button.addEventListener('click', AddToFavClicked)
  }
}
var AddCartItemButtons =document.getElementsByClassName('cart-btn')
for (var i=0 ; i<AddCartItemButtons.length; i++){
      var button = AddCartItemButtons[i]
      button.addEventListener('click', AddToCartClicked)
}
function AddToCartClicked(event){
      var button = event.target;
      var shopItem = button.parentElement.parentElement.parentElement;
      var title = shopItem.getElementsByClassName('title')[0].innerText;
      var price = shopItem.getElementsByClassName('price')[0].innerText;
      var Imagesrc = shopItem.getElementsByClassName('img')[0].src;
      console.log(title,price,Imagesrc);
      addItemToCart(title,price,Imagesrc);
     
}
function addItemToCart(title, price, Imagesrc) {
  // create a cart item object with a unique identifier
  var item = {id: title + '-' + price, title: title, price: price, image: Imagesrc, quantity: 1};
  
  // retrieve the existing cart items from localStorage, or create an empty array
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
  // check if the item is already in the cart, and update its quantity if so
  var foundItem = false;
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === item.id) {
      cartItems[i].quantity++;
      foundItem = true;
      break;
    }
  }
  // if the item is not already in the cart, add it
  if (!foundItem) {
    cartItems.push(item);
  }
  
  // save the updated cart items back to localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  updateCartItemCount();
  
}
function calculateCartTotal() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    var quantity = parseInt(item.quantity); // parse quantity as an integer
    var price = parseFloat(item.price.replace('$','')); // parse price as a float
    total += quantity * price;
  }
  return total.toFixed(2); // round to 2 decimal places
}

function displayCartItems() {
  // retrieve the cart items from localStorage
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // get a reference to the cart-items div
  var cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = ''; // clear the cart items div

  // create the cart items container div
  var cartItemsContainer = document.createElement('div');

  // iterate over the cart items and create HTML elements for each one
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    var cartRowContents = `
      <div class="cart-item cart-column">
        <img class="cart-item-image" src="${item.image}" width="100" height="100">
        <span class="cart-item-title">${item.title}</span>
      </div>
      <span class="cart-price cart-column">${item.price}</span>
      <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="${item.quantity}">
        <div class="cart-item-quantity">
          <form><button class="cart-item-remove" data-item-id="${item.id}">REMOVE</button></form>
        </div>
        
      </div>
    `;
    cartRow.innerHTML = cartRowContents;
    cartItemsContainer.appendChild(cartRow);

    const removeButton = cartRow.querySelector('.cart-item-remove');
    removeButton.addEventListener('click', function(event) {
      event.preventDefault();
      var itemId = removeButton.getAttribute('data-item-id');
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      var index = cartItems.findIndex(function(cartItem) {
        return cartItem.id === itemId;
      });
      if (index !== -1) {
        if (cartItems[index].quantity > 1) {
          cartItems[index].quantity--;
          cartRow.querySelector('.cart-quantity-input').value = cartItems[index].quantity;
        } else {
          cartItems.splice(index, 1);
          cartRow.remove();
          
        }
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        displayCartItems(); // <-- added this line to update cart display
        updateCartTotal(); // <-- added this line to update cart total
        
      }
      updateCartItemCount();
    });

    const quantityInput = cartRow.querySelector('.cart-quantity-input');
    quantityInput.addEventListener('change', function(event) {
      var newQuantity = parseInt(event.target.value);
      var itemId = removeButton.getAttribute('data-item-id');
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      var index = cartItems.findIndex(function(cartItem) {
        return cartItem.id === itemId;
      });
      if (index !== -1) {
    cartItems[index].quantity = newQuantity;
    if (cartItems[index].quantity <= 0) {
      cartItems.splice(index, 1);
      cartRow.remove();
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems(); // <-- added this line to update cart display
    updateCartTotal(); // <-- added this line to update cart total
    updateCartItemCount();
  }
});
  }
  // add the cart items container div to the cart items div
  cartItemsDiv.appendChild(cartItemsContainer);
  updateCartTotal(); // <-- added this line to update cart total initially
}
function updateCartTotal() {
  var cartItemContainer = document.getElementById('cart-items');
  var cartRows = cartItemContainer.getElementsByClassName('cart-row');
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName('cart-price')[0];
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
    var price = parseFloat(priceElement.innerText.replace('$', ''));
    var quantity = quantityElement.value;
    total += price * quantity;
  }
  total = Math.round(total * 100) / 100; // round to 2 decimal places
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}
function updateCartItemCount() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  var cartItemCount = 0;
  for (var i = 0; i < cartItems.length; i++) {
    cartItemCount += cartItems[i].quantity;
  }
  var cartItemCountSpan = document.getElementById('cartnum-items');
  cartItemCountSpan.innerHTML = cartItemCount;
}
updateCartItemCount();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("purbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  

function togglePaymentInfo() {
  var paymentInfo = document.getElementById("payment-info");
  var submitButton = document.getElementById("checkout_submit");
  if (paymentInfo.style.display === "none") {
    paymentInfo.style.display = "block";
    submitButton.innerHTML = "Complete Purchase";
    submitButton.style.display = "inline-block";
  } else {
    // Get the form element
    var form = document.getElementById("checkout-form");
    // Submit the form
    form.submit();
  }
}
// Get the form element
var form = document.getElementById("checkout-form");



 

  
displayFavItems();

