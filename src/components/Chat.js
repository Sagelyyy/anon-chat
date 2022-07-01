import './chat.css'
import Post from './Post'

const Chat = () => {
    return (
        <div className="chat--container">
            <div className='message--container'>
                <p className='message--username'>Anon</p>
                <p className='message--text recieved'>Hello World</p>
            </div>
            <div className='message--container'>
                <p className='message--username--sent'>Anon</p>
                <p className='message--text sent'>Goodbye World</p>
            </div>
            <Post />
        </div>
    )
}

export default Chat