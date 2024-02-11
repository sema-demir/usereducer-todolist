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
    //elemanın Id si tıkladığım actionun payloadına eşit değilse
    //yeni bir dizi olustur filtered yap
    case "kaldır":
      const filtred = state.todos.filter((item) => item.id !== action.payload);

      //state in son halini sana göndermek istiyor
      return {
        ...state,
        todos: filtred,
      };
    case "temizle":
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};
