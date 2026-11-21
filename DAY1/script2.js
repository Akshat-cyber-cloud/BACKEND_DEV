const inventory = [
  { id: "p1", name: "Laptop", price: 1000, stock: 5 },
  { id: "p2", name: "Mouse", price: 50, stock: 0 }, // Out of stock!
  { id: "p3", name: "Keyboard", price: 80, stock: 12 },
  { id: "p4", name: "Monitor", price: 300, stock: 3 }
];

const cart = [
  { productId: "p1", qty: 1 },
  { productId: "p3", qty: 2 }
];

const isStockAvailable = cart.every(cartItem => {

    const product = inventory.find(invItem => invItem.id === cartItem.productId);

    if(!product) return false;

    return product.stock >= cartItem.qty;
});

console.log("Can checkout proceed?", isStockAvailable);