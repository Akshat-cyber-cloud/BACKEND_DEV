const inventory = [
  { id: "p1", name: "Laptop", price: 1000, stock: 5 },
  { id: "p2", name: "Mouse", price: 50, stock: 10 },
  { id: "p3", name: "Keyboard", price: 80, stock: 8 }
];

const coupons = [
    {
        coupon: "SAVE10",
    },
    {
        coupon: "FLAT50"
    }
]

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

const cartSummary = () => {
    const subtotal = cart.reduce((sum,item) => {
        return sum + (item.price * item.qty);
    },0);

    const totalItemsCount = cart.reduce((sum,item) => sum + item.qty, 0);

    return {
        items: cart,
        totalItemsCount,
        subtotal
    }
}

const decreaseQuantity = (productId) => {
    const index = cart.findIndex(i => i.productId === productId);

    if(index === -1){
        throw new Error("Item not found in the cart");
    }

    if(cart[index].qty > 1){
        cart[index].qty -= 1;
    }else{
        cart.splice(index,1);
    }

    return cart;
}

const applyCoupon = (coupon) => {

    if(cart.length === 0){
        throw new Error("Cannot apply coupon to an empty cart");
    }

    const subtotal = cart.reduce((sum,item) => {
        return sum + (item.price * item.qty);
    },0)

    const validCoupon = coupons.find(c => c.coupon === coupon);

    if(!validCoupon){
        throw new Error("No Such Coupon exists");
    }
    
    let discount = 0;

    if(coupon === "SAVE10"){
        discount = subtotal * 0.10;
    }else if(coupon === "FLAT50"){
        if(subtotal < 200){
            throw new Error("Minimum subtotal of $200 required for FLAT50");
        }
        discount = subtotal * 0.50;
    }

    const total = subtotal - discount;

    return {
        items: cart,
        subtotal,
        discount,
        total,
        couponApplied: coupon
    };
}

export {addToCart , cartSummary , decreaseQuantity , applyCoupon};