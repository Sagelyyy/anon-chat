import './chat.css'
import Post from './Post'

import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../firebase'
import { useEffect, useState } from 'react'
import ChatElements from './ChatElements';

const Chat = () => {

    const [loading, setLoading] = useState(false)
    const [chatData, setChatData] = useState()
    const [ip, setIp] = useState()

    useEffect(() => {
        setLoading(true)
        const q = query(collection(db, "chat"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push(doc.data());
            });
            messages.sort((a, b) => a.time - b.time).reverse()
            setChatData(messages)
            setLoading(false)
        });
        return unsubscribe
    }, [])


    const getIp = async () => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => { setIp(data.ip) })
    }

    useEffect(() => {
        getIp()
    }, [])


    if (chatData && !loading) {
        return (
            <div className="smartphone">
                <div className='content'>
                    <ChatElements data={chatData} ip={ip} />
                    <Post ip={ip} />
                </div>
            </div>
        )
    } else {
        return (
            <div className="chat--container">
                <div className="smartphone">
                    <div className='content'>
                        <span className="material-icons loading">
                            cached
                        </span>
                    </div>
                </div>

            </div>
        )
    }
}

export default Chat