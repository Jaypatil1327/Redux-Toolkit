import { useDispatch } from "react-redux";
import {
  IncrementState,
  DecrementState,
  ResetState,
} from "../../store/slices/counter";

function Button({ type }) {
  const dispatch = useDispatch();

  function handleClick() {
    if (type === "Increment") {
      dispatch(IncrementState());
    } else if (type === "Decrement") {
      dispatch(DecrementState());
    } else {
      dispatch(ResetState());
    }
  }
  return <button onClick={handleClick}>{type}</button>;
}

export default Button;
