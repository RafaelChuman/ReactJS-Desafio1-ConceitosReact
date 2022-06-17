import { useState } from "react";
import { Header } from "./components/Header";
import { Post, PostParms } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

const posts: PostParms[] = [
  {
    id: 1,
    author:{
      avatarUrl:'http://github.com/rafaelChuman.png',
      name:"Rafael",
      role:'3º Sgt',
    },
    content:[
      {type:'paragraph', content:"Chuman é lindo"},
      {type:'paragraph', content:"Chuman é Magnífico"},
      {type:'link', content:"chuman.com.br"},
    ],
    publishedAt: new Date('2022-06-16 16:08')
  },
  {
    id: 2,
    author:{
      avatarUrl:'http://github.com/rafaelChuman.png',
      name:"Chuman",
      role:'3º Sgt',
    },
    content:[
      {type:'paragraph', content:"Rafael é lindo"},
      {type:'paragraph', content:"Rafael é Magnífico"},
      {type:'link', content:"Rafael.com.br"},
    ],
    publishedAt: new Date('2022-06-06 16:10')
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map( 
              post => {
                return (
                <Post
                  id={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />)
              }
            )
          }
        </main>
      </div>
    </div>
  );
}

export default App;
