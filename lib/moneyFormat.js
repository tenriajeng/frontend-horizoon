const formatPrice = (price) => {
    if (price === null) {
        return null;
    }
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    return formatter.format(price);
};
export default formatPrice;
