import { useReducer } from "react";
import reducer from "./Reducers/CounterReducer";

const initialState = {
  count: 0,
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="d-flex gap-4 align-items-center ">
      <button onClick={() => dispatch("Sıfırla")} className="bg-info">
        Sıfırla
      </button>
      <button onClick={() => dispatch("Azalt")} className="bg-danger">
        Azalt
      </button>
      <span className="lead">{state.count} </span>
      <button onClick={() => dispatch("Arttır")} className="bg-success">
        Arttır
      </button>
    </div>
  );
};

export default Counter;
