import '../styles/main.css';
import { Link, } from 'react-router-dom';

const Card = ({item}) => {
   console.log(item)

   const {title, body, userid, author} = item

     return(
       
         <div className="card">
           <h1 className="title"> {title} </h1>
           <p className="content">{body}</p>
            {/* this sends the users to a specific url (their post) */}
           <Link to={`/userposts/${userid}`} className="post-link"> Post by: {author} {userid}</Link>
             
         </div>
       
  )
}

export default Card;
