export const createCustomerDto = (customer) => {
  return {
    name: customer.fullName,
    address: customer.address.label,
    email: customer.email,
    phone: customer.phoneNumber,
    tierLevel: "2",
  };
};
