// constants
const SET_CUSTOMER = "orders/SET_CUSTOMER";
const SET_ORDER_DETAILS = "orders/SET_ORDER_DETAILS";
const SET_ORDER_CART = "orders/SET_ORDER_CART";

export const setCustomer = (customer) => ({
  type: SET_CUSTOMER,
  payload: customer,
});

export const setOrderDetails = (orderDetails) => ({
  type: SET_ORDER_DETAILS,
  payload: orderDetails,
});

export const setOrderCart = (product) => ({
  type: SET_ORDER_CART,
  payload: product,
});

const initialState = {
  customer: {
    fullName: "",
    company: "",
    email: "",
    phoneNumber: "",
    address: "",
    unit: "",
    zipCode: "",
  },
  orderDetails: {
    product: "",
    notes: "",
    quantity: "",
    poJobName: "",
  },
  orderCart: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CUSTOMER:
      return { ...state, customer: action.payload };
    case SET_ORDER_DETAILS:
      return { ...state, orderDetails: action.payload };
    case SET_ORDER_CART:
      return { ...state, orderCart: [...state.orderCart, action.payload] };
    default:
      return state;
  }
}
