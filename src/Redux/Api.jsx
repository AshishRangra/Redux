let url = "http://localhost:8001/register";

export const FetchData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

// let url2 = "http://localhost:8001/register";

// export const FetchData2 = async () => {
//   try {
//     const res = await fetch(url2);
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };
