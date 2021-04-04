import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import UsersList from "./UsersList/UsersList";
import Profile from "./Profile/Profile";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

function App() {
    // States
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState(null);
    // Functions
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch((err) => setErrors(err));
    }, []);
    console.log(users);
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route
                    path="/users"
                    exact
                    render={(props) => <UsersList users={users} {...props} />}
                />
                <Route path="/users/:id" component={Profile} />
            </Switch>
        </div>
    );
}

export default App;
