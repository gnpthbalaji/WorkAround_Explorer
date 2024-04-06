
function formatCurrency(num) {
    return num.toLocaleString('en-US', { minimumFractionDigits: 2 });
}

export {formatCurrency}