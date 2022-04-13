export const createOrderDto = (order) => {
  return {
    docNumber: order.poJobName,
    totalAmount: 200,
    invoiceNumber: 3,
    poName: order.poJobName,
    shippingRoute: "Tampa",
    orderStatus: "New",
    staffId: 1,
    customerId: 1,
  };
};
