import React from 'react';
import s from './Post.module.css';
import Post_Block from '../Post_Block';

const Post = (props) => {
  return (
    <div className={s.posts}>
      <div className={s.item}>
        <div className={s.sign}></div>
        <p className={s.mess_text}>
          {props.message}
          {props.likeCount}
        </p>
      </div>
    </div>
  )

}



export default Post;