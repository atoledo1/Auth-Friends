import React, { useState } from "react";
import { axiosWithAuth } from "./AxioswithAuth";

const initialFriend = {
  name: "",
  age: "",
  email: "",
};

const AddFriend = (props) => {
  const [newFriend, setNewFriend] = useState(initialFriend);

  const handleChange = (e) => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((res) => {
        console.log(res);
        props.setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setNewFriend(initialFriend);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new friend:</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
          placeholder="Write name here"
          required
        />
      </div>

      <div>
        <label>Age: </label>
        <input
          type="text"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
          placeholder="Write age here"
          required
        />
      </div>

      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
          placeholder="Write email here"
          required
        />
      </div>

      <button>Add new friend</button>
    </form>
  );
};

export default AddFriend;
