// import React from 'react';
// import './post.css';
// import CommentList from '../../CommentList/CommentList';

// const Post={
//     width: '50rem',
//     width: '50rem',
//     background: '#E0E0E0'
// }

// const post = ({title, body, comments}) => (
    
//     <div className={Post}>
//         <h1>{title}</h1>
//         <p>
//             {body}
//         </p>
//         <CommentList comments={comments}/>
//     </div>
// );

// export default post;
import React, { Component } from 'react';
import './post.css';
import CommentList from '../../CommentList/CommentList';

class post extends Component {
    render() {
        const Post={
            width: '50rem',
            background: '#E0E0E0'
        }
        const title = this.props.title;
        const body = this.props.body;
        const comments = this.props.comments;
        return (
            <div className={Post}>
                <h1>{title}</h1>                
                <p>
                    {body}
                </p>
                <CommentList comments = {comments} />
            </div>
        );
    }
}

export default post;