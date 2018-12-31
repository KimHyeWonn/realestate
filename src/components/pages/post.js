import React from 'react';
import './post.css';
import CommentList from '../../CommentList/CommentList';

const Post={
    width: '50rem',
    margin: '0 auto',
    background: '#E0E0E0'
}

const post = ({title, body, comments}) => (
    <div className={Post}>
        <h1>{title}</h1>
        <p>
            {body}
        </p>
        <CommentList comments={comments}/>
    </div>
);

export default post;