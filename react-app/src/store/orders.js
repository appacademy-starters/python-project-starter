// constants
const SET_CUSTOMER = "session/SET_CUSTOMER";

export const setCustomer = (customer) => ({
  type: SET_CUSTOMER,
  payload: customer,
});

const initialState = { customer: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CUSTOMER:
      return { customer: action.payload };
    default:
      return state;
  }
}
