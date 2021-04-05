import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
    return (
        <div className="home-page">
            <h1>Join our network</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                numquam, ullam blanditiis, eum dicta a recusandae sint eligendi,
                iste consequatur ea. Cum adipisci perferendis ex labore fugiat?
                Magnam, suscipit dolores?
            </p>
            <h2>
                <Link to="/users">Meet our members</Link>
            </h2>
        </div>
    );
};

export default Home;
