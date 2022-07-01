import './post.css'
import { useEffect, useState } from "react"

const Post = () => {

    const [post, setPost] = useState()

    useEffect(() => {
        console.log(post)
    },[post])

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
            <form>
                <input onChange={handleChange} name='data'/>
                <button>Reply</button>
            </form>
        </div>
    )
}


export default Post