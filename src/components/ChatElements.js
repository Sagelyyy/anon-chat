const ChatElements = (props) => {

    const elems = props.data.map((item, i) => {
        return (
            <div key={i} className='message--container'>
                <p className='message--username'>Anon</p>
                <p className='message--text recieved'>{item.data}</p>
            </div>
        )
    })


    return (
        elems
    )
}

export default ChatElements