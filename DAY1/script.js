const transactions = [
    { id: "tx01", customer: "Alice", category: "Electronics", amount: 120, status: "completed" },
    { id: "tx02", customer: "Bob", category: "Books", amount: 35, status: "completed" },
    { id: "tx03", customer: "Charlie", category: "Electronics", amount: 80, status: "cancelled" },
    { id: "tx04", customer: "Alice", category: "Books", amount: 25, status: "completed" },
    { id: "tx05", customer: "David", category: "Fashion", amount: 50, status: "completed" },
    { id: "tx06", customer: "Bob", category: "Electronics", amount: 200, status: "completed" }
];


const generateAnalytics = (transactions) => {
    const completed = transactions.filter(t => t.status === "completed");
    const numberOfItems = completed.length;
    const totalRevnue = completed.reduce((bank, t) => {
        return bank + t.amount;
    }, 0);

    const revenueByCategory = completed.reduce((acc, t) => {
        const category = t.category;

        if (acc[category]) {
            acc[category] += t.amount;
        } else {
            acc[category] = t.amount;
        }

        return acc;
    }, {});

    const customerSpending = completed.reduce((acc, t) => {
        const cus = t.customer;

        if (acc[cus]) {
            acc[cus] += t.amount;
        } else {
            acc[cus] = t.amount;
        }

        return acc;
    }, {});

    return {
        totalRevenue: totalRevnue,
        totalCompletedOrders: numberOfItems,
        revenueByCategory,
        customerSpending
    };
};

const report = generateAnalytics(transactions);
console.log(report);