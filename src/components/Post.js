import React from "react";
import Comment from "./Comment";


function Post(post){
  return(
    <div className="post">
      <header>
        <img src={post.data.author.avatar} />
        <div className="name">
          <h2>{post.data.author.name}</h2>
          <small>{post.data.date}</small>
        </div>
      </header>
      <p className="postText">{post.data.content}</p>
      <div className="commentsList">
      { post.data.comments && post.data.comments.map(comment => <Comment key={comment.id} data={comment} /> ) }        
      </div>
    </div>
  );
}

export default Post;