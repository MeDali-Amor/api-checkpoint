import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";
const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            {/* <img src="/profilePic.jpg" alt="" /> */}
            <h1 className="id">{user.name[0]}</h1>
            <h2 className="user-name">{user.name}</h2>
            <button className="profile-btn" onClick={(e) => e.preventDefault()}>
                <Link to={`/users/${user.id}`}>See Profile</Link>
            </button>
        </div>
    );
};

export default UserCard;
