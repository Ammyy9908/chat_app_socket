import React from 'react';

import './Messages.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

function Messages({messages,name}) {
    console.log(messages)
    return (
        <div className="messages">
            <ScrollToBottom className="messages">
                {
                    messages && messages.map((item)=>{
                        return(
                            <div key={"1"}>
                                <Message message={item.text} sentBy={item.user} name={name}/>
                            </div>
                        )
                    })
                }
            </ScrollToBottom>
        </div>
    )
}

export default Messages
