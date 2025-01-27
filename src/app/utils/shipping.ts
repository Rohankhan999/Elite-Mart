export const generateOrderId = () => {
    return Math.random().toString(36).substring(2, 12).toUpperCase();
};

export const calculateDeliveryDate = () => {
    const deliveryDays = Math.floor(Math.random() * 4) + 2; // 2-5 days
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + deliveryDays);
    return deliveryDate.toLocaleDateString();
};

export const calculateShippingRate = (country: string) => {
    const baseRate = 50; // Base rate from Karachi
    const rates: { [key: string]: number } = {
        'United Kingdom': 150,
        'United States': 180,
        'Canada': 170,
        'Australia': 200
    };
    return rates[country] || baseRate;
};
