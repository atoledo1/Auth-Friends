import React, { useState } from "react";
import { axiosWithAuth } from "./AxioswithAuth";


const initialState = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [credentials, setCredentials] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);

        props.history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Write username here"
      />
      <br></br>
<label>Password: </label>
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Write password here"
      />
<br></br>

      <button>Log in</button>
    </form>
  );
};

export default Login;
