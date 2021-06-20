import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import '../styles/main.css'

const UserPost = () => {
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/posts/' + post.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    // this enables us to use changeable paths. It works with the /userposts/:userid
    const {userid} = useParams()
    const { data : post , isPending} = useFetch('http://localhost:8000/posts/' + userid)


    return (
        <div className="user-post">
            { isPending && <div> Posts Loading... </div>}
            { post && (
                <article>
                    <h2> { post.title} </h2>
                    <p> Written by {post.author} </p>
                    <div> {post.body} </div>
                    <button className='btn' onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default UserPost;