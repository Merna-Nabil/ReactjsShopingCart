import { useSelector, useDispatch } from "react-redux";
import Counter from "./Counter";
import { incrementCount, decrementCount } from "../../redux/counterSlice";

function CounterAction() {
  const CounterGlobalValue = useSelector((state) => state.counterStore.counter);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementCount());
  };

  const decrrement = () => {
    if (CounterGlobalValue <=0 ){
     console.log("nth todo");
    }
     else {
       dispatch(decrementCount());
     }
    }
  return (
    <div>
      <Counter
        count={CounterGlobalValue}
        increment={increment}
        decrrement={decrrement}
      />
    </div>
  );
  }

export default CounterAction;
