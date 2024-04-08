// // import { useSelector, useDispatch } from "react-redux";
// // import { fetchApi } from "./Redux/Slice";
// // import { useEffect, useState } from "react";
// // function App() {
// //   const storeValue = useSelector((state) => state);
// //   const [val, setVal] = useState({
// //     name: "",
// //     password: "",
// //   });
// //   const handleChange = (e) => {
// //     setVal({ ...val, [e.target.name]: e.target.value });
// //   };
// //   console.log("Store Value is : ", storeValue);
// //   const dispatch = useDispatch();

// //   const getData = async (e) => {
// //     e.preventDefault();
// //     const data = await storeValue;
// //     console.log("API data is : ", data);

// //     if (val.name === data[0].email && val.password === data[0].password) {
// //       console.log("Login successfully");
// //     } else {
// //       console.log("Details does not match....");
// //     }
// //   };
// //   // const storeValue2 = useSelector((state) => state);
// //   // console.log("Store value 2 : ", storeValue2.name);
// //   // const getData2 = (value) => {
// //   //   dispatch(fetchApi2());
// //   // };

// //   return (
// //     <div className="App">
// //       <button onClick={getData}>Get Data</button>
// //       {/* <button onClick={getData2}>Get Data</button> */}
// //       <form onSubmit={getData}>
// //         <input type="text" name="text" onChange={handleChange} />
// //         <input type="password" name="password" onChange={handleChange} />
// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default App;

// // import React, { useRef } from "react";

// // function App() {
// //   const inputRef = useRef(null);

// //   const handleClick = () => {
// //     // Accessing input value using ref
// //     console.log(inputRef.current.value);
// //   };

// //   return (
// //     <div>
// //       {/* Input field */}
// //       <input type="text" ref={inputRef} />

// //       {/* Button to get input value */}
// //       <button onClick={handleClick}>Get Value</button>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState, useCallback } from "react";

// function ChildComponent({ handleClick }) {
//   return <button onClick={handleClick}>Click Me</button>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <ChildComponent handleClick={handleClick} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
const obj = {
  Punjab: ["Mohali", "Chandigarh"],
  Himachal: ["Una", "Shimla"],
};

const App = () => {
  const [arr, setArr] = useState([]);
  const [val, setVal] = useState({ state: "", city: "" });
  const handleChange = (e) => {
    setVal({ ...val, state: e.target.value });
    setArr(obj[e.target.value]);
  };
  const handleCityChange = (e) => {
    setVal({ ...val, city: e.target.value });
  };const arr1=[1,2,3,4];
  return (
    <div>
  <p>
  {arr1.filter(value => value === 2).map((value, index) => (
    <span key={index}>{value}</span>
  ))}
</p>
      <div>
        <select name="state" onChange={handleChange}>
          {
            Object.keys(obj).map((value, index) => (
            <option key={index}>{value}</option>
          ))}
        </select>
        <select name="city" onChange={handleCityChange}>
          {arr.map((value, index) => (
            <option key={index}>{value}</option>
          ))}
        </select>
      </div>
      {val.state && arr ? (
        <div>
          {val.state}-{val.city}
        </div>
      ) : (
        ""
      )}
      <button
        onClick={() => {
          setArr([]);
          setVal({ state: "", city: "" });
        }}
      >
        clear
      </button>
    </div>
  );
};

export default App;
