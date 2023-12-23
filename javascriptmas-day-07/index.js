const wishlist = [
  "Macbook Air M2",
  "One year of Scrimba Pro",
  "PS5",
  "Books"
];

const wishlistContainer = document.querySelector('.wishlist');

wishlist.forEach(item => {
 const listItem = document.createElement('li');
 listItem.textContent = item;
 wishlistContainer.appendChild(listItem);
});