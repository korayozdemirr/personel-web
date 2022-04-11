import BlogsLeft from '../../components/BlogsLeft';
import Link from 'next/link';
import { db } from '../../firebase/firebase';
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
                width={300}
                height={400}
                loading='lazy'
                className='card-img-top rounded'
              />
              <div className='card-body'>
                <h3 className='card-title fs-1'>{post[0].title}</h3>
                <div className='card-text fs-2'>
                  {ReactHtmlParser(post[0].content)}
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <BlogsLeft />
            <p className='fw-normal fs-2 my-4 text-center'>Yeni Postlar</p>
            <div className='d-flex flex-column  mt-4'>
              <Link href='/'>
                <a className='link-dark fs-2 mt-2'>Hello World</a>
              </Link>
              <Link href='/'>
                <a className='link-dark fs-2 mt-2'>Hello World</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
export async function getServerSideProps(context) {
  const post = [];
  const slug = context.query.PostDetails;
  try {
    await db
      .collection('blogs')
      .where('slug', '==', slug)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          post.push(doc.data());
        });
      });
  } catch (e) {
    console.log('hata');
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
