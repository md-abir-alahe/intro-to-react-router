import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {

    const {id, title, body} = post;

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h5>ID : {id}</h5>
            <h5>{title}+</h5><Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigation}>With button handler</button>
        </div>
    );
};

export default Post;