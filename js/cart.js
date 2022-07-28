/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  // console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tBody = document.querySelector('tbody');
  for (let i in cart.items) {
    let tr = document.createElement('tr');
    tBody.appendChild(tr);
    let tdItem = document.createElement('td');
    let tdQuantity = document.createElement('td');
    let tdDelete = document.createElement('td');
    tdItem.textContent = cart.items[i].product;
    tdQuantity.textContent = cart.items[i].quantity;
    tdDelete.textContent = 'X';
    tdDelete.classList.add('delete');
    tr.appendChild(tdDelete);
    tr.appendChild(tdQuantity);
    tr.appendChild(tdItem);
    console.log(cart.items[i].product);
  }

  // DONE: Find the table body

  // DONE: Iterate over the items in the cart
  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  if (event.target.className === 'delete') {

    let tRow = event.target.parentNode;
    tRow.parentNode.removeChild(tRow);

  }
  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // DONE: Re-draw the cart table
}


// This will initialize the page and draw the cart on screen
renderCart();
