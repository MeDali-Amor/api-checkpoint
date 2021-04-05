import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import { Redirect } from "react-router-dom";
import "./UserList.css";
const UsersList = ({ users, login }) => {
    return (
        <>
            {!login ? (
                <>
                    <Redirect to="/" />
                </>
            ) : (
                <div className="user-list">
                    {users.map((user, i) => (
                        <UserCard user={user} key={i} />
                    ))}
                </div>
            )}
        </>
    );
};

export default UsersList;
