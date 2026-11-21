const inventory = [
    { id: "p1", name: "Laptop", price: 10000, stock: 5 },
    { id: "p2", name: "Mouse", price: 5000, stock: 0 },
    { id: "p3", name: "Keyboard", price: 300, stock: 12 }
]

const orders = [];

const createOrder = (customerName, items) => {

    for (const item of items) {
        const product = inventory.find(p => p.id === item.productId);

        if (!product) {
            throw new Error(`The product with the ID ${item.productId} is not available`);
        }

        if (product.stock < item.qty) {
            throw new Error(`The product with ID ${item.productId} is out of stock`);
        }
    }

    const subTotal = items.reduce((sum, item) => {
        const product = inventory.find(p => p.id === item.productId);

        return sum + (product.price * item.qty);
    }, 0);

    for (const item of items) {
        const product = inventory.find(p => p.id === item.productId);
        product.stock -= item.qty;
    }

    const tax = Number((subTotal * 0.18).toFixed(2));
    const total = Number((subTotal + tax).toFixed(2));

    const newOrder = {
        orderId: `ORD_${Date.now()}`,
        customerName,
        items,
        subTotal,
        tax,
        total,
        status: "Order Placed"
    };

    orders.push(newOrder);
    return newOrder;
}

const getAllOrders = () => {
    return orders;
}

const getInventory = () => {
    return inventory;
}

const cancelOrder = (orderId) => {
    const order = orders.find(o => o.orderId === orderId);

    if (!order) {
        throw new Error("Order not found");
    }

    if (order.status === "cancelled") {
        throw new Error("Order is already cancelled");
    }

    for(const item of order.items){
        const findProduct = inventory.find(i => i.id === item.productId);
        findProduct.stock += item.qty;
    }

    order.status = "cancelled";
    return order;
}

module.exports = {
    createOrder,
    getAllOrders,
    getInventory,
    cancelOrder
};