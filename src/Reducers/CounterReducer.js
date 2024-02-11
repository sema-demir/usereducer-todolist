const reducer = (state, emir) => {
  if (emir === "Sıfırla") {
    return {
      count: 0,
    };
  }

  if (emir === "Arttır") {
    return {
      count: state.count + 1,
    };
  }

  if (emir === "Azalt") {
    return {
      count: state.count - 1,
    };
  }
};

export default reducer;
