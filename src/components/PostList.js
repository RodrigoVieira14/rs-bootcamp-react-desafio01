import React, { Component } from "react";
import Header from "./Header";

import avatarDefault from '../assets/avatar-default.png';

import Post from './Post';


class PostList extends Component {
  
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Rodrigo Vieira',
          avatar: avatarDefault
        },
        date: '04 Jun 2019',
        content: 'Bem Vindos a conclusão do DESAFIO REACT 04!',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            content: "Conteúdo do comentário"
          }
        ],
      }
    ]
  };

  render() {
    return (
      <>
      <Header />
      <div id="postlist">
      { this.state.posts && this.state.posts.map(post => <Post key={post.id} data={post} /> ) }

        
        <div className="post">
          <header>
            <img src={avatarDefault} />
            <div className="name">
              <h2>Rodrigo Vieira</h2>
              <small>06/09/2019</small>
            </div>
          </header>
          <p className="postText">Bem Vindos a conclusão do desafio React 04!</p>
          <div className="commentsList">
            <div className="comment"> 
              <img src={avatarDefault} />
              <p><strong>Diego Fernandes</strong> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
            </div>
            <div className="comment"> 
              <img src={avatarDefault} />
              <p><strong>Diego Fernandes</strong> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
            </div>
            
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default PostList;
