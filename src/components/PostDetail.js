import React from 'react';
import {useState,useEffect} from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import {useParams} from 'react-router-dom'
function PostDetail() {
    const [post,setPost] = useState({});
    const {postId} = useParams();
    useEffect(()=>{
        firebase
            .firestore()
            .collection('posts')
            .doc(postId)
            .get()
            .then((snapshot)=>{
                console.log(snapshot.data())
                setPost(snapshot.data())
            })
    },[])

    return (
        <div className='post-detail'>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;