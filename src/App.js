import React,{useState,useEffect} from 'react';
import {Route,Routes} from 'react-router-dom'
import './App.css';
import axios from 'axios';

import UserList from "./components/UserList"
import Profile from "./components/Profile"

function App() {
  const [users,setUsers] =useState([])
  const [userDetail,setUserDetail] =useState([])
  useEffect(()=>{
    axios
    .get("http://localhost:3002/users")
    .then((res) => {
      setUsers(res.data);

      let userData = res.data.map((item)=>{
        return <Route key={item.id} path={`/${item.id}`} element={<Profile detail={item}/>}/>
    })
    setUserDetail(userData)
    })
    .catch((err) => {
      console.log(err);
    });
  },[])
  return (
    <div className="App">
      <h1>Users in TDA_SEI01</h1>
    <main>
      <Routes>
        <Route path='/' element={<UserList users={users}/>} />
        {/* <Route path='/meta' element={<Meta data ={data}/>} />
        <Route path='/heroes' element={<Hero data = {data}/>} />
        <Route path='/about' element={<About/>} /> */}
        {userDetail}
      </Routes>
      </main>
    </div>
  );
}

export default App;
