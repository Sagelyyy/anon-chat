import { useCallback } from "react"

const ChatElements = (props) => {

    const chatRef = useCallback(node => {
        if (node !== null) {
            node.scrollIntoView()
        }
    }, [props.data])


    const elems = props.data.map((item, i) => {
        if (item.ip_address === props.ip) {
            return (
                i !== props.data.length - 1 ?
                    <div key={i} className='message--container'>
                        <p className='message--username--sent'>Anon</p>
                        <p className='message--text sent' style={{ backgroundColor: item.bgColor }}>{item.data}</p>
                    </div> :
                    <div key={i} ref={chatRef} className='message--container'>
                        <p className='message--username--sent'>Anon</p>
                        <p className='message--text sent' style={{ backgroundColor: item.bgColor }}>{item.data}</p>
                    </div>
            )
        } else {
            return (
                i !== props.data.length - 1 ?
                    <div key={i} className='message--container'>
                        <p className='message--username'>Anon</p>
                        <p className='message--text recieved' style={{ backgroundColor: item.bgColor }}>{item.data}</p>
                    </div> :
                    <div key={i} ref={chatRef} className='message--container'>
                        <p className='message--username'>Anon</p>
                        <p className='message--text recieved' style={{ backgroundColor: item.bgColor }}>{item.data}</p>
                    </div>
            )
        }
    })


    return (
        elems
    )
}

export default ChatElements