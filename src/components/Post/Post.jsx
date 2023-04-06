import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = ({post}) => {

    const {id, title, body} = post;

    return (
        <div className='post'>
            <h5>ID : {id}</h5>
            <h5>{title}+</h5><Link to={`/post/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Post;