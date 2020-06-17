import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./AxioswithAuth";
import AddFriend from "./addFriendForm";

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <AddFriend friends={friends} setFriends={setFriends} />

      <div>
        {friends.map((friend) => {
          return (
            <div  key={friend.id}>
              <div>name: {friend.name}</div>
              <div>age: {friend.age}</div>
              <div>email: {friend.email}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendsList;
