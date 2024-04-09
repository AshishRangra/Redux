import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "./Redux/Slice";
import { useEffect, useState } from "react";
function App() {
  const storeValue = useSelector((state) => state);
  const [val, setVal] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };
  console.log("Store Value is : ", storeValue);
  const dispatch = useDispatch();

  const getData = async (e) => {
    e.preventDefault();
    const data = await storeValue;
    console.log("API data is : ", data);

    if (val.name === data[0].email && val.password === data[0].password) {
      console.log("Login successfully");
    } else {
      console.log("Details does not match....");
    }
  };
  // const storeValue2 = useSelector((state) => state);
  // console.log("Store value 2 : ", storeValue2.name);
  // const getData2 = (value) => {
  //   dispatch(fetchApi2());
  // };

  return (
    <div className="App">
      <button onClick={getData}>Get Data</button>
      {/* <button onClick={getData2}>Get Data</button> */}
      <form onSubmit={getData}>
        <input type="text" name="text" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
