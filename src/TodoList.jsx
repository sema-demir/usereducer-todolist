import { useReducer } from "react";
import { initialState, reducer } from "./Reducers/TodoReducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    //inputtaki yazıya erişme
    const text = e.target[0].value;

    //kaydedileceek objeyi hazırlama
    const newTodo = {
      id: new Date().getTime(),
      title: text,
    };
    dispatch({
      type: "ekle",
      payload: newTodo,
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="d-flex gap-3 align-items-center"
        action=""
      >
        <input className="form-control" type="text" />
        <button>Gönder</button>
        <button
          onClick={() =>
            dispatch({
              type: "temizle",
            })
          }
          type="button"
        >
          Temizle
        </button>
      </form>
      <ul className="list-group my-5">
        {state.todos.map((todo) => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>{todo.title}</span>
            <button
              onClick={() =>
                dispatch({
                  type: "kaldır",
                  payload: todo.id,
                })
              }
              className="bg-danger"
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
