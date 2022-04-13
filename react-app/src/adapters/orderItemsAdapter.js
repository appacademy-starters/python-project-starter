export const createOrderItemDto = (orderItems) => {
  return orderItems.map(({ notes, quantity }) => ({
    orderId: 8,
    productId: Math.floor(Math.random() * 4) + 1,
    quantity: parseInt(quantity),
    notes,
  }));
};
