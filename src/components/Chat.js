import './chat.css'
import Post from './Post'

import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../firebase'
import { useEffect, useState } from 'react'
import ChatElements from './ChatElements';

const Chat = () => {

    const [chatData, setChatData] = useState()

    useEffect(() => {
        const q = query(collection(db, "chat"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push(doc.data());
            });
            messages.sort((a, b) => a.time - b.time).reverse()
            setChatData(messages)
        });
        return unsubscribe
    }, [])


    if (chatData) {
        return (
            <div className="chat--container">
                <ChatElements data={chatData} />
                <Post />
            </div>
        )
    }
}

export default Chat