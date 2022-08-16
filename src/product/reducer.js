const initialState = {
  mapvalues: {
    product: [],
    totalToPay: [],
    count: 0,
  },
  todoList: [
    { id: '0', name: 'sản phẩm 1', price: 150, total: [] },
    { id: '2', name: 'sản phẩm 2', price: 100, total: [] },
    { id: '3', name: 'sản phẩm 3', price: 130, total: [] },
    { id: '4', name: 'sản phẩm 4', price: 105, total: [] },
  ],
};
const rootReduces = (state = initialState, action) => {
  switch (action.type) {
    case 'todoList/sumTodo':
      return {
        ...state,
        sum: action.payload,
      };
    default:
      return state;
  }
};
export default rootReduces;
