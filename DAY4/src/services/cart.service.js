const inventory = [
  { id: "p1", name: "Laptop", price: 1000, stock: 5 },
  { id: "p2", name: "Mouse", price: 50, stock: 10 },
  { id: "p3", name: "Keyboard", price: 80, stock: 8 }
];

const cart = [];

const addToCart = (productId , qty) => {
    const product = inventory.find(p => p.id === productId);

    if(!product){
        throw new Error("Product not found");
    }

    const cartItem = cart.find(item => item.productId === productId);
    const currentQtyInCart = cartItem ? cartItem.qty : 0;

    const totalWanted = currentQtyInCart + qty;

    if(totalWanted > product.stock){
        throw new Error(`Insufficient stock! Available: ${product.stock}`);
    }

    if(cartItem){
        cartItem.qty += qty;
    }else{
        cart.push({
            productId,
            name: product.name,
            price: product.price,
            qty
        });
    }

    return cart;
}

export {addToCart};