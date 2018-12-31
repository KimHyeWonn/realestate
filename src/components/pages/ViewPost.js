import React, { Component } from 'react';
import PostContainer from '../../PostContainer/PostContainer';

class ViewPost extends Component {
    render() {
        return (
            <div>
                <h1>Post</h1>
                <PostContainer />
            </div>
        );
    }
}

export default ViewPost;