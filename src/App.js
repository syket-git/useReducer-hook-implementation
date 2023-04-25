import { useReducer } from "react";

export default function App() {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: action.value };
      case "decrement":
        return { ...state, count: action.value };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button
        onClick={() => dispatch({ type: "increment", value: state.count + 1 })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "increment", value: state.count - 1 })}
      >
        Decrement
      </button>
    </div>
  );
}
