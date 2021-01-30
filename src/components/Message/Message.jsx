import React from 'react';
import './Message.css';
import ReactEmoji from 'react-emoji';

function Message({ message,sentBy,name }) {
    let isSendByMe = false;
    const trimmedname = name.trim().toLowerCase();

    if(sentBy===name.toLowerCase()){
        isSendByMe = true;
    }
    return (
        isSendByMe?(
                <div className="messageContainer jutifyEnd">
                    <p className="sentText pr-10">{trimmedname}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorLight">{ReactEmoji.emojify(message)}</p>
                    </div>
                </div>
        ):
        (
                <div className="messageContainer justifyStart">
                    <p className="sentText pl-10">{sentBy}</p>
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{ReactEmoji.emojify(message)}</p>
                    </div>
                </div>
        )
    )
}

export default Message
