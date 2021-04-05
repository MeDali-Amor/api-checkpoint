import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import UsersList from "./UsersList/UsersList";
import Profile from "./Profile/Profile";
import Home from "./Home/Home";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

function App() {
    // States
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState(null);
    const [login, setLogin] = useState(false);
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
            <Navbar login={login} setLogin={setLogin} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    path="/users"
                    exact
                    render={(props) => (
                        <UsersList users={users} login={login} {...props} />
                    )}
                />
                <Route
                    path="/users/:id"
                    render={(props) => <Profile login={login} {...props} />}
                />
            </Switch>
        </div>
    );
}

export default App;
