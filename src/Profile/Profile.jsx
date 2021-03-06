import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./Profile.css";

const Profile = ({ match, login }) => {
    // States
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);
    // Functions
    console.log(match);
    console.log(user);
    useEffect(() => {
        axios
            .get(
                `https://jsonplaceholder.typicode.com/users?id=${match.params.id}`
            )
            .then((res) => setUser(res.data[0]))
            .catch((err) => setError(err));
    }, []);

    return (
        <>
            {!login ? (
                <Redirect to="/" />
            ) : (
                <div className="profile-container">
                    <div className="profile-card">
                        <div className="sidebar">
                            <img
                                src="/profilePic.jpg"
                                alt=""
                                className="profile-pic"
                            />
                        </div>
                        <div className="info">
                            <h1 className="user-name">{user.name}</h1>
                            <span>
                                <img src="/home.svg" alt="" />
                                {/* {user.address.city} */}
                            </span>
                            <span>
                                <img src="/work_black_24dp.svg" alt="" />
                                {/* {user.company.name} */}
                            </span>
                            <span>
                                <img src="/email_black_24dp.svg" alt="" />
                                {user.email}
                            </span>
                            <span>
                                <img src="/call_black_24dp.svg" alt="" />
                                {user.phone}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
