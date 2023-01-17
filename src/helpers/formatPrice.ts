export const formatPrice = (price: number | string) => price.toString().split(/(?=(?:\d{3})+(?!\d))/).join(' ');
