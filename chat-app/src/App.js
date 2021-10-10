import { useState,useRef,useEffect } from 'react';

import Message from './components/Message';
import { FormControl,InputLabel,Input} from '@mui/material'
// import {collection,onSnapshot, query, orderBy} from "@firebase/firestore"
import {collection,getDocs,addDoc,serverTimestamp,query,orderBy,onSnapshot} from "firebase/firestore";
import FlipMove from "react-flip-move"
import './App.css';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import db from './firebase';

const message = collection(db,"messages")



function App() {
  const[messages,setMessages] = useState([])
  const[userName,setUsername] = useState("")
  const inputRef = useRef("")


  useEffect(()=>{

    const q = query(message, orderBy("timestamp","desc"))
    const fetching =  onSnapshot(q,(snapshot)=>{
      let todo = []
      snapshot.forEach(doc=>{
        // let id =  doc.id;
        // let task = doc.data() 
      todo.push({
        id:doc.id,
        username:doc.data().username,
        text:doc.data().text
      })
      })
      setMessages(todo)
      })
    return()=>{
      fetching()

    }
   
     
    // async function getCities(db) {
    //   const allmessages = collection(db, 'messages');
    //   const allmessagesSnapshot = await getDocs(allmessages).orderBy("timeStamp","desc");

    //   setMessages(allmessagesSnapshot.docs.map(doc => doc.data()));
    // }
    // getCities(db)
   
  
   },[])

  useEffect(()=>{
    setUsername(prompt("Enter your name:"))

  },[])


  const sendingMessage = async (event)=>{
    event.preventDefault()
    if(inputRef.current.value===""){
      return
    }
   await addDoc(collection(db,"messages"),{
     username:userName,
     text:inputRef.current.value,
     timestamp:serverTimestamp()
   })


  }
  console.log(messages)

  return (
    <div className="App">
      <h1>Start Chatting</h1>
      <form className="form_control" >
      <FormControl className="formcontrol_div">
    
     <Input className="form_input"  placeholder="Enter a message" inputRef={inputRef} required />
     <IconButton className="form_button" type="submit" onClick={sendingMessage}>
       <SendIcon      />
     </IconButton>
    
     </FormControl>
    
      </form>
      <FlipMove>
      {messages.map((message)=>(
        <Message key={message.id}   message = {message} user = {userName} />
      ))}
      </FlipMove>
    </div>
  );
}

export default App;
