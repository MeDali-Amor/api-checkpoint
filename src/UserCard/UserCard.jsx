import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";
const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            {/* <img src="/profilePic.jpg" alt="" /> */}
            <div className="circle">
                <h1>{user.name[0]}</h1>
            </div>
            <div className="content">
                <h2>{user.name}</h2>
                <button
                    className="profile-btn"
                    onClick={(e) => e.preventDefault()}
                >
                    <Link to={`/users/${user.id}`}>See Profile</Link>
                </button>
            </div>
        </div>
    );
};

export default UserCard;
