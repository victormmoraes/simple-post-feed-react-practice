import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/victormmoraes.png',
      name: 'Victor Medrado',
      role: 'Dev'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit' },
      { type: 'paragraph', content: 'amet consectetur adipisicing elit.' },
      { type: 'paragraph', content: 'Autem earum possimus minima corporis id magni explicabo ' },
      { type: 'paragraph', content: 'placeat impedit sint blanditiis ? Cupiditate aperiam' },
      { type: 'link', content: 'numquam eum excepturi' }
    ],
    publishedAt: new Date('2022-10-28 23:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Victor Moraes',
      role: 'Dev'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit' },
      { type: 'paragraph', content: 'amet consectetur adipisicing elit.' },
      { type: 'paragraph', content: 'Autem earum possimus minima corporis id magni explicabo ' },
      { type: 'paragraph', content: 'placeat impedit sint blanditiis ? Cupiditate aperiam' },
      { type: 'link', content: 'numquam eum excepturi' }
    ],
    publishedAt: new Date('2022-10-27 23:00:00'),
  },
]


function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>

    </>
  )
}

export default App

