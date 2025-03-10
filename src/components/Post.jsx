import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';
// import React, {useState, useEffect} from 'react'

const Post = ({posts, deletePost}) => {
    const {post_id} = useParams();

    const post = posts.find(post => post.id === post_id)
    


    const individualPost = post ? (
        <div className='post center'>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
            <div>
              <button className="btn grey" onClick = {() => deletePost(post.id)}>Delete</button>
            </div>
        </div>
         
    
        
) : (
    <div className>Loading Post...</div>
    
    
    )

  return (
    <div>
      {individualPost}
    </div>
  )
}

const mapStateToProps = state =>{
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    deletePost: (id) => {dispatch({type: 'DELETE_POST', id})}
    
  }
}




const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Post)