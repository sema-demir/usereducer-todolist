export const initialState = {
  todos: [],
  isDarkMode: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ekle":
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case "kaldır":
      const filtred = state.todos.filter((item) => item.id !== action.payload);
      return {
        ...state,
        todos: filtred,
      };

    default:
      return state;
  }
};
