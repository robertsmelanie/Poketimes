import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { useParams, Link } from 'react-router-dom';
// import Pokeball from '../pokeball.png'

const Home = ({posts}) => {
    console.log(posts)
   

    const postList = posts.length ? (
        posts.map(post => (
            <div className="post card" key={post.id}>
            {/* <img src={Pokeball} alt="" /> */}
                <div className='card-content'>
                <Link to={`/posts/${post.id}`}>
                    <span className="card-title">{post.title}</span>
                    </Link>
                    <p>{post.body}</p>
                </div>

            </div>



         
        ))
       
    ) : (
        <div className='center'>No posts to show</div>
    )


return (
    <div className='container'>
        <h4 className='center'>Home</h4>
        <p>{postList}</p>
    </div>
)
}

const mapStateToProps = state =>{
    return {
        posts: state.posts
    }
}

const connector = connect(mapStateToProps)

export default connector(Home)