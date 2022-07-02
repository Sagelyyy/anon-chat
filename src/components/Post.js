import './post.css'
import { useEffect, useState } from "react"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import { nanoid } from 'nanoid';

const Post = () => {

    const [post, setPost] = useState()
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

  const getIp = async () => {
      fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIp(data.ip))
  }

  useEffect(() => {
    getIp()
  }, [])

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
            ip_address: ip
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
                <input onChange={handleChange} name='data'/>
                <button>Reply</button>
            </form>
        </div>
    )
}


export default Post