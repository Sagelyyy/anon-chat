import './chat.css'
import Post from './Post'

const Chat = () => {
    return (
        <div className="chat--container">
            <div className='message--container recieved'>
                <p className='message--username'>Anon</p>
                <p className='message--text'>Hello World</p>
            </div>
            <div className='message--container sent'>
                <p className='message--username'>Anon</p>
                <p className='message--text'>Goodbye World</p>
            </div>
            <Post />
        </div>
    )
}

export default Chat