const ChatElements = (props) => {

    const elems = props.data.map((item, i) => {
        if (item.ip_address === props.ip) {
            return (
                <div key={i} className='message--container'>
                    <p className='message--username--sent'>Anon</p>
                    <p className='message--text sent' style={{backgroundColor:item.bgColor}}>{item.data}</p>
                </div>
            )
        } else {
            return (
                <div key={i} className='message--container'>
                    <p className='message--username'>Anon</p>
                    <p className='message--text recieved'style={{backgroundColor:item.bgColor}}>{item.data}</p>
                </div>
            )
        }
    })


    return (
        elems
    )
}

export default ChatElements