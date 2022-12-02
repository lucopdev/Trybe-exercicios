function showProfit(cost, value) {

    const taxes = (cost + cost * (20 / 100))
    const profit = value - taxes;
    const profit_1000_pieces = profit * 1000;
    if (cost === 0 || value === 0) {
        return 'Invalid entries';
    }
    return profit_1000_pieces;
}

console.log(showProfit(80, 250));