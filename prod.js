[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 25.99,
    "discount": 5,
    "rating": 4.3,
    "inStock": true,
    "tags": ["computer", "mouse", "wireless"],
    "variants": [
      { "color": "Black", "quantity": 25 },
      { "color": "White", "quantity": 10 }
    ]
  },
  {
    "id": 2,
    "name": "Mechanical Keyboard",
    "category": "Electronics",
    "price": 89.99,
    "discount": 10,
    "rating": 4.7,
    "inStock": false,
    "tags": ["keyboard", "mechanical", "rgb"],
    "variants": [
      { "color": "Black", "quantity": 0 },
      { "color": "Gray", "quantity": 5 }
    ]
  },
  {
    "id": 3,
    "name": "Running Shoes",
    "category": "Fashion",
    "price": 59.5,
    "discount": 15,
    "rating": 4.1,
    "inStock": true,
    "tags": ["shoes", "sports", "running"],
    "variants": [
      { "color": "Blue", "quantity": 15 },
      { "color": "Red", "quantity": 7 }
    ]
  },
  {
    "id": 4,
    "name": "Cotton Hoodie",
    "category": "Fashion",
    "price": 35.0,
    "discount": 0,
    "rating": 4.0,
    "inStock": false,
    "tags": ["hoodie", "cotton", "winter"],
    "variants": [
      { "color": "Black", "quantity": 0 },
      { "color": "Green", "quantity": 2 }
    ]
  },
  {
    "id": 5,
    "name": "Smart Watch",
    "category": "Electronics",
    "price": 149.99,
    "discount": 20,
    "rating": 4.8,
    "inStock": true,
    "tags": ["watch", "smart", "fitness"],
    "variants": [
      { "color": "Black", "quantity": 30 },
      { "color": "Pink", "quantity": 12 }
    ]
  }
]
// 1. search by  product name
// 2. Check if any product out of stock
// 3. Check if all electronics > $20
// 4. sort by price
// 5. sort by rating 
// 6. find total stock 
// 7. Remove or insert products
// 8. filter by electronics category




const products=[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 25.99,
    "discount": 5,
    "rating": 4.3,
    "inStock": true,
    "tags": ["computer", "mouse", "wireless"],
    "variants": [
      { "color": "Black", "quantity": 25 },
      { "color": "White", "quantity": 10 }
    ]
  },
  {
    "id": 2,
    "name": "Mechanical Keyboard",
    "category": "Electronics",
    "price": 89.99,
    "discount": 10,
    "rating": 4.7,
    "inStock": false,
    "tags": ["keyboard", "mechanical", "rgb"],
    "variants": [
      { "color": "Black", "quantity": 0 },
      { "color": "Gray", "quantity": 5 }
    ]
  },
  {
    "id": 3,
    "name": "Running Shoes",
    "category": "Fashion",
    "price": 59.5,
    "discount": 15,
    "rating": 4.1,
    "inStock": true,
    "tags": ["shoes", "sports", "running"],
    "variants": [
      { "color": "Blue", "quantity": 15 },
      { "color": "Red", "quantity": 7 }
    ]
  },
  {
    "id": 4,
    "name": "Cotton Hoodie",
    "category": "Fashion",
    "price": 35.0,
    "discount": 0,
    "rating": 4.0,
    "inStock": false,
    "tags": ["hoodie", "cotton", "winter"],
    "variants": [
      { "color": "Black", "quantity": 0 },
      { "color": "Green", "quantity": 2 }
    ]
  },
  {
    "id": 5,
    "name": "Smart Watch",
    "category": "Electronics",
    "price": 149.99,
    "discount": 20,
    "rating": 4.8,
    "inStock": true,
    "tags": ["watch", "smart", "fitness"],
    "variants": [
      { "color": "Black", "quantity": 30 },
      { "color": "Pink", "quantity": 12 }
    ]
  }
]
const productsearch=products.find(p=> p.name==="Smart Watch");
console.log(productsearch);
const ifstock=products.some(p=> p.inStock===false);
console.log(ifstock);
let sortedByPrice = [products].sort((a, b) => a.price - b.price);
console.log(sortedByPrice);
let sortedByRating = [products].sort((a, b) => b.rating - a.rating);
console.log(sortedByRating);
let totalStock = products.reduce((total, product) => {
  return total + product.variants.reduce((t, v) => t + v.quantity, 0);
}, 0);

console.log(totalStock);
products.push({
  id: 6,
  name: "Bluetooth Speaker",
  category: "Electronics",
  price: 45,
  discount: 5,
  rating: 4.4,
  inStock: true,
  tags: ["speaker", "bluetooth"],
  variants: [
    { color: "Black", quantity: 20 }
  ]
});

console.log(products);
const removedProduct = products.pop();
console.log(removedProduct);
console.log(products);

