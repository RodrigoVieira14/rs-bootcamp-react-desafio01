import React, { Component } from "react";
import Header from "./Header";

import avatarDefault from "../assets/avatar-default.png";
import avatarRodrigo from "../assets/avatar-rodrigo.jpg";
import avatarDiego from "../assets/avatar-diego.png";

import Post from "./Post";

class PostList extends Component {
  state = {
    newsvalues: {
      comment: "",
      post: ""
    },
    posts: [
      {
        id: 1,
        author: {
          name: "Rodrigo Vieira",
          avatar: avatarRodrigo
        },
        date: "04 Jun 2019",
        content: "Bem Vindos a conclusão do DESAFIO REACT 04!",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: avatarDiego
            },
            content: "Isso ae garoto!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Rodrigo Vieira",
          avatar: avatarRodrigo
        },
        date: "04 Jun 2019",
        content:
          "Veja o projeto no GitHub: https://github.com/RodrigoVieira14/rs-bootcamp-react-desafio01 ",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: avatarDiego
            },
            content: "Ficou legal, vou te add no linkedin manda o usuario."
          },
          {
            id: 2,
            author: {
              name: "Rodrigo Vieira",
              avatar: avatarRodrigo
            },
            content: "Me add lá, linkedin: rodrigo-vieira-942784a3/ "
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Rodrigo Vieira",
          avatar: avatarRodrigo
        },
        date: "04 Jun 2019",
        content: "Testando o vários tamanhos de textos lorem ipsum.",
        comments: [
          {
            id: 1,
            author: {
              name: "Teste 1",
              avatar: avatarDefault
            },
            content:
              "Phasellus tincidunt elementum lectus. Quisque nec arcu maximus, varius felis in, sagittis eros. Duis ac nisi nec magna venenatis rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
          },
          {
            id: 2,
            author: {
              name: "Teste 2",
              avatar: avatarDefault
            },
            content:
              "Quisque vel hendrerit nisl, at euismod lectus. Sed rhoncus sapien augue, vitae facilisis leo consectetur eget. Donec nec enim mauris. Curabitur massa sem, vehicula viverra odio iaculis, imperdiet malesuada lacus. Nam pulvinar dignissim mauris vitae imperdiet."
          },
          {
            id: 3,
            author: {
              name: "Teste 3",
              avatar: avatarDefault
            },
            content:
              "Ut consectetur congue orci, sed dignissim dui rhoncus et. Vivamus tempus velit eu hendrerit egestas. Nunc sollicitudin, dolor ut tempus porta, mauris erat feugiat est, eget finibus mi est vitae massa. Sed at lectus dolor. Praesent convallis non orci ac porta. Donec vulputate sed odio a cursus. Morbi felis nulla, luctus vitae pellentesque vel, aliquet a augue. Suspendisse ante enim, imperdiet non ipsum quis, cursus faucibus ligula. Ut congue mi metus, vel commodo ligula vulputate ullamcorper. Praesent mollis eros suscipit suscipit ullamcorper. Proin imperdiet eget risus et varius. Nunc id blandit nibh, ac tristique ipsum. Ut ante nulla, condimentum vitae augue eu, molestie sagittis quam. Nunc iaculis sit amet nibh eget efficitur. Aenean in malesuada est. Donec lorem libero, sollicitudin vitae malesuada in, luctus sed est."
          },
          {
            id: 4,
            author: {
              name: "Teste 4",
              avatar: avatarDefault
            },
            content:
              "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sem mauris, condimentum quis nibh vestibulum, venenatis ullamcorper ipsum. Cras vel venenatis lacus. Nullam tristique arcu eu imperdiet tristique. Aenean aliquet ligula metus, quis dictum diam iaculis ut. Integer ac lacus ullamcorper, laoreet urna ac, sodales mauris. Donec tristique leo purus, ac sodales nisi molestie ultricies. Sed feugiat nunc ultrices ipsum congue, quis scelerisque dui efficitur. Aliquam non sodales ipsum, ut varius ante. Curabitur eget lobortis dolor. Aenean ac justo eros. Sed vel aliquet est, eget volutpat metus. Vivamus mollis viverra dolor vel luctus. Curabitur dictum pulvinar turpis non euismod. Duis gravida tempus quam, vel venenatis purus ultricies non. Sed eu erat sem. Proin purus ipsum, imperdiet in orci at, consectetur ornare velit. Vivamus iaculis diam eget turpis vestibulum facilisis. Integer viverra neque quis felis mattis, eget imperdiet ipsum mattis."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <>
        <Header />
        <div id="postlist">
          {this.state.posts &&
            this.state.posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </>
    );
  }
}

export default PostList;
