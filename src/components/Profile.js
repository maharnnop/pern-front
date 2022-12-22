import React from "react"
import axios from "axios"

const Profile = props => {
    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:3002/users/${props.detail.id}`)
        .then(res => {
            console.log("deleted")
            window.location.href='http://localhost:3000/'
        })
    }
      return (
        <div>  
            <p>Name: {props.detail.name}</p>
            <p>Type: {props.detail.type}</p>
            <p>Status : {props.detail.status ? "Active" : "Not active"}</p>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

export default Profile