import React from "react"
import {Link} from 'react-router-dom'

const UserList = props => {
    const allUsers = props.users.map(item => {
        return (
            <div>
                <Link to={`/${item.id}`}><h2>{item.name}</h2></Link>
                {/* <p>Name: {item.name}</p>
                <p>Color: {item.color}</p>
                <p>Is {item.readyToEat ? "ready" : "not ready"} to eat.</p> */}
            </div>
        )
    })

    return (
        <div>  
            <div>{allUsers}</div>
        </div>
    )
}

export default UserList