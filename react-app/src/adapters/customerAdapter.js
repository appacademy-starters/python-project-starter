export const createCustomerDto = (customer) => {
  return {
    name: customer.fullName,
    address: customer.address,
    email: customer.email,
    phone: customer.phoneNumber,
    tierLevel: 1,
  };
};
