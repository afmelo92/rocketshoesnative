export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCartRequest(id) {
  return {
    type: '@cart/REMOVE_REQUEST',
    id,
  };
}

export function removeFromCartSuccess(id) {
  return {
    type: '@cart/REMOVE_SUCCESS',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
