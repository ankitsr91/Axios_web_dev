import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [errorData, setErrorData] = useState("");

  //1st way to fetch api
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
  //     setMyData(response.data);
  //   }).catch((error) => {
  //     setErrorData(error.message);
  //   })
  // }, []);

  //2ns ways to fetch api in react
  const getApiData = async () => {
    try {
      const data = await axios.get("/posts");
      setMyData(data.data);
    } catch (error) {
      setErrorData(error.message);
    }
  };

  //call only one times
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="headerbar">
      {errorData != "" && <h2>{errorData}</h2>}
      <div className="header">
        {myData.slice(0, 15).map((post) => {
          const { id, title, body } = post;
          return (
            <div className="id" key={id}>
              <h1>{title}</h1>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
