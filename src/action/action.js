export const addProduct = (value) => {
  return {
    type: 'product/addProduct',
    payload: value,
  };
};

export const checkProduct = (value) => {
  return {
    type: 'product/CheckoutProduct',
    payload: value,
  };
};

export const removeProduct = (value) => {
  return {
    type: 'product/removeProduct',
    payload: value,
  };
};
export const increaseQuantity = (value) => {
  return {
    type: 'product/decreaseQuantity',
    payload: value,
  };
};
export const decreaseQuantity = (value) => {
  return {
    type: 'product/increaseQuantity',
    payload: value,
  };
};
