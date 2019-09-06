import React from "react";

function Comment(comment){
  return(
    <div className="comment"> 
      <img src={comment.data.author.avatar} />
      <p><strong>{comment.data.author.name}</strong> {comment.data.content}</p>
    </div>
  )
}
  
export default Comment