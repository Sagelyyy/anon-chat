import './post.css'
import { useEffect, useState } from "react"
import { addDoc, collection } from "firebase/firestore"; 
import { db } from '../firebase';
import { nanoid } from 'nanoid';

const Post = (props) => {

    const [post, setPost] = useState({data:''})
    const [submitted, setSubmitted] = useState()
    const [ip, setIp] = useState()

    useEffect(() => {
      if (submitted) {
          writePostData(post)
          setSubmitted(false)
          setPost((old) => {
              return ({
                  ...old,
                  data: ''
              })
          })
      }
  }, [post])

  const writePostData = async (post) => {
    const postRef = await addDoc(collection(db, 'chat'), post)
}

    const handleSubmit = (e) => {
      e.preventDefault()
      setPost((old) => {
        return ({
            ...old,
            time: Date.now(),
            id: nanoid(),
            ip_address: props.ip,
            bgColor: props.bgColor
        })
    })
    setSubmitted(true)

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost((old) => {
          return ({
            ...old,
            [name]: value
          })
        })
      }

    return(
        <div className="post--container">
            <form onSubmit={handleSubmit}>
                <textarea className='post--text'  value={post.data} onChange={handleChange} name='data'/>
                <button className='post--button'>Reply</button>
            </form>
        </div>
    )
}


export default Post