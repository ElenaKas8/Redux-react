import { useDispatch, useSelector } from "react-redux";
import { decrAction, decrByPayloadAction, incrAction, incrByPayloadAction, resetAction } from "../store/counterReducer";

function Counter() {

  // useSelector позволяет получить стейт из хранилища
  const count = useSelector(store => store.count.count)

  // useDeisptach инициализирует диспитечра для отправки type операции в редьюсер
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrAction())}>Increment</button>
        <button onClick={() => dispatch(decrAction())}>Decrement</button>
        <button onClick={() => dispatch(resetAction())}>Reset</button>
        <button onClick={() => dispatch(incrByPayloadAction(5))}>Incr +5</button>
        <button onClick={() => dispatch(decrByPayloadAction(5))}>Decr -5</button>
        <button onClick={() => dispatch(incrByPayloadAction(+prompt()))}>Incr by prompt</button>
        <button onClick={() => dispatch(decrByPayloadAction(+prompt()))}>Decr by prompt</button>
      </div>
    </div>
  );
}

export default Counter;