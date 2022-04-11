const shorten = (text) => {
  const splitted = text.split(" ");
  const newText = `${splitted[0]} ${splitted[1]}`;
  return newText;
};

const isInCart = (state, id) => {
  return !!state.selectedItems.find((item) => item.id === id);
};

const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export { shorten, isInCart, quantityCount };
