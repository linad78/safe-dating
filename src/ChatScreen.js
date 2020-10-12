import React,{useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css';


function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages,setMessages]=useState([
        {
            name:'Holly',
            image:'...',
            message:' hello there!'


        },
        {
          name:'Holly',
        image:'..',
        message:'My name is Holly nice to meet you '
        },
        {
            name:'',
            message:"Hello there Holly how are you nice to meet you!"
        },
    ]);
    const handleSend= e =>{
    e.preventDefault();
    setMessages([...messages,{message:input}]);//update and push a new message into the chat
    setInput('');
    }
    return (
        <div className="chatScreen">
            <p className="chat__date">matched on 10/10/20</p>
            {messages.map((message) =>
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            )}
    
                <form className="chatScreen__input">
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}//to update and sent messages everytime we input a new message
                    className="chatScreen__inputField" 
                    placeholder="Enter a message" 
                    type="text" 
                    />
                    <button onClick={handleSend}
                    type="submit"
                     className="chatScreen__inputButton"> SEND</button>
                </form>
            </div>
    )
}

export default ChatScreen;
