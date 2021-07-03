import React from 'react';
import Post from './Post/Post.jsx';

const Post_Block = (props) => {

 
  let postsElements =props.posts.map(item => <Post message = {item.message} likeCount = {item.likeCount} key = {item.id} />);


  return(
    <div>

     {postsElements }
  
  </div>
  )
}



export default Post_Block