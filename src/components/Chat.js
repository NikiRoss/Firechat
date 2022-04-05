import React, {useState, useEffect} from 'react'
import { auth, db } from '../firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'

function Chat() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    db.collection('messages').orderBy('createdAt').limit(50)
    .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
      <div>
        <SignOut />
        <div className="msgs">
          {messages.map(({ id, text, photoURL, uid, }) => (
            <div>
              <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                <img src={photoURL} />
                <p>{text}</p>
              </div>
            </div>
          ))}
          <SendMessage />
        </div>
      </div>
  )
}

export default Chat