import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "./Redux/Slice";
function App() {
  const storeValue = useSelector((state) => state);
  console.log("Store Value is : ", storeValue);
  const dispatch = useDispatch();
  const getData = (value) => {
    dispatch(fetchApi());
  };
  return (
    <div className="App">
      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default App;
