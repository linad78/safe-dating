import React from 'react';
import './Chats.css';
import Chat from "./Chat"



function Chats () {
    return (
        <div className="chats">
            <Chat 
            name=" Holly" 
            message="Hello there :)" 
            profilePicture="https://cdn11.bigcommerce.com/s-a4w28t94lu/images/stencil/1280x1280/products/112450/128732/71397-disney-princess-cinderella-lunch-napkins__28684.1562086978.jpg?c=2"
            />
            <Chat 
            name=" Harry" 
            message="Hello " 
            profilePicture="" 
            />
        </div>
    )


    };

export default Chats;
