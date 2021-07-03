import React from 'react';
import s from './MyPosts.module.css';
import Post_Block from './Post_Block/Post_Block.jsx';
import { reduxForm, Field } from 'redux-form'
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators.js'



const MyPosts = ({ ...props }) => {

  let newPostElement = React.createRef();

  let addMyPost = (values) => {
    props.addPost(values.myPostBody)
  }

  return (

    <div className={s.write_post}>

      <AddPostFormRedux onSubmit={addMyPost} />
      <Post_Block posts={props.posts} />
    </div>
  )
}

const maxLength10 = maxLengthCreator(10);

const MyPostForm = (props) => {

  return (<form onSubmit={props.handleSubmit} className={s.post_form} >
    <Field component={"textarea"} name="myPostBody" cols="50" rows="5" placeholder="введите текст" validate={[requiredField, maxLength10]} />
    <div>
      <button className={s.butt} >Add Post</button>
    </div>
  </form>
  )
}





const AddPostFormRedux = reduxForm({ form: "myPostAddForm" })(MyPostForm)




export default MyPosts