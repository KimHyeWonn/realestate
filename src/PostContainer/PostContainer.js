import React, { Component } from 'react';
import * as service from '../lib/post';
import { Post } from '../components/pages';

class PostContainer extends Component {
    constructor(props) {
        super();
        // initializes component state
        this.state = {
            postId: 1,
            fetching: false,
            post: {
                title: 'title',
                body: 'body'
            },
            comments: []
        };
        
        console.log('fetching1');
    }

    componentDidMount() {
        this.fetchPostInfo(1);
    }
    
    fetchPostInfo = async (postId) => {
        
        console.log('fetching2');
        this.setState({
            fetching: true // requesting..
            
        });

        // wait for two promises
        const info = await Promise.all([
            service.getPost(postId),
            service.getComments(postId)

        ]);
        // Object destructuring Syntax,
        // takes out required values and create references to them
        const {title, body} = info[0].data; 
                                            
        const comments = info[1].data;

        this.setState({
            postId,
            post: {
                title, 
                body
            },
            comments,
            fetching: false // done!
        });

    }

    render() {
        const {postId, post, comments} = this.state;
        return (
            <div>
                <Post 
                    postId={postId}
                    title={post.title}
                    body={post.body}
                    comments={comments}/>
            </div>
        );
    }
}

export default PostContainer;