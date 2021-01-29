import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import "./Join.css"

function Join() {

    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    return (
        <div className="joinOuterContainer">
            <div className="joinInner">
                <h1 className="heading">Join</h1>
                <div><input type="text" className="join_input" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)}/></div>
                <div><input type="text" className="join_input mt-20" placeholder="Chat Room Name" value={room} onChange={(e)=>setRoom(e.target.value)}/></div>
                <Link onClick={(e)=>(!name || !room)?e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                <button className="button mt-20" type="submit">Join Room</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
