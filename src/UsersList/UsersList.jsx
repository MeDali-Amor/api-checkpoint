import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";
const UsersList = ({ users }) => {
    // // States
    // const [users, setUsers] = useState([]);
    // const [errors, setErrors] = useState(null);
    // // Functions
    // useEffect(() => {
    //     axios
    //         .get("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => setUsers(res.data))
    //         .catch((err) => setErrors(err));
    // }, []);
    // console.log(users);

    return (
        <div className="user-list">
            {users.map((user, i) => (
                <UserCard user={user} key={i} />
            ))}
        </div>
    );
};

export default UsersList;
