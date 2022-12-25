import { useState } from 'react';
import Post from '../components/Posts';
import Search from '../components/search';
import { db } from '../firebase/firebaseConfig';
export default function Blogs({ posts, search }) {
  return (
    <>
      <section className='bg-darka'>
        <div className='d-flex flex-column container py-d9 justify-content-center align-items-center '>
          <h2 className='text-secondary text-center'>Blog Yazılarım</h2>

          <Search items={search} />
        </div>
      </section>
      <section className='bg-dark'>
        <div className='container py-d9'>
          <div className='row'>
            {posts.map((post, index) => (
              <div className='col-lg-4' key={index}>
                <Post
                  index={index}
                  image={post.imageSrc}
                  date={post.date}
                  editor={post.editor}
                  slug={post.slug}
                  title={post.title}
                />
              </div>
            ))}

            {/* <div className='col-lg-4'>
              
            </div> */}
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <a href='#' className='link-primary'>
              Daha fazla göster
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
Blogs.getInitialProps = async ({ req }) => {
  const posts = [];
  const search = [];
  await db
    .collection('blogs')
    .limit(6)
    .orderBy('timestamp', 'desc')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
      });
    });
  await db
    .collection('blogs')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        search.push(doc.data());
      });
    });
  return { posts, search };
};
