import { useEffect, useState } from 'react';
import BlogsLeft from '../../components/BlogsLeft';
import { db } from '../../firebase/firebase';
import { collection, query, where, getDocs, doc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import ReactHtmlParser from 'react-html-parser';
const PostDetails = ({ post }) => {
  return (
    <>
      <section>
        <div className='container py-d9'>
          <h2 className='text-secondary text-center'>{post[0].title}</h2>
        </div>
      </section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='card' style={{ borderWidth: 0 }}>
              <img
                src={post[0].imageSrc}
                width={500}
                height={500}
                loading='lazy'
                className='card-img-top rounded'
              />
              <div className='card-body'>
                <h3 className='card-title'>{post[0].title}</h3>
                <div className='card-text'>
                  {ReactHtmlParser(post[0].content)}
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <BlogsLeft />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
export async function getServerSideProps(context) {
  console.log(context.query.PostDetails);
  const post = [];
  const slug = context.query.PostDetails;
  try {
    const q = query(collection(db, 'blogs'), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      post.push(doc.data());
    });
  } catch (e) {
    console.log(e);
  }
  const data = post;
  if (data.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    }, // will be passed to the page component as props
  };
}
