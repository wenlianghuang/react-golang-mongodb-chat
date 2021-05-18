import logo from './logo.svg';
import './App.css';
import {connect,sendMsg,clearMessage} from "./api"
import Header from './components/Header'
import Message from './components/Message'
//import ChatHistory from './AllDetail.scss'
import './AllDetail.scss'
import { useState,useEffect, Children } from 'react';
import Button from '@material-ui/core/Button'
function App() {
  const [chatHistory,setChatHistory] = useState([]);
  const [chatInput,setChatInput] = useState("")

  const send = (event) => {
    if(event.keyCode === 13){
      sendMsg(event.target.value)
      event.target.value = ""
    }
  }

  useEffect(()=>{
    connect((msg)=>{
      console.log("msg.body: ",msg.body)
      if(msg.body === "clear"){
        console.log("Clear Achevie!!!")
        setChatHistory([])
      }else{
        setChatHistory(chatHistory => [...chatHistory,msg])
      }
      //setChatHistory(chatHistory => [...chatHistory,msg])
    })
    
  })
  
  let messages = chatHistory.map((msg,index)=>(
    <p key={index}>
      {msg.body}
    </p>
  ))
  
  
  
  
  
 
  
  return (
    <div className="App">
      <Header/>
      <div className="ChatHistory">
        <h2>Chat History</h2>
        
        <Button variant="contained" color="primary" onClick={clearMessage} >
          Clear  
        </Button> 
        {/*{messages}*/}
        
      </div>
      <div className="App-messages">
        {messages}
      </div>
      <div className="ChatInput">
        <input onKeyDown={send} />
      </div>
    </div>
  );
}

export default App;



