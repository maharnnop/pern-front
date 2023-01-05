import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";

import UserList from "./components/UserList";

import Dashbord from "./components/Dashbord";

function App() {
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <h1>Cash Books</h1>
      <Link to="/dashbord">Dashbord</Link>
      <Link to="/">Transection</Link>
      <main>
        <Routes>
          <Route path="/" element={<UserList users={users} />} />
          <Route path="/dashbord" element={<Dashbord data={users}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
