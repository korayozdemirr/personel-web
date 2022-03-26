import Post from '../components/Posts';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
export default function Blogs({ posts }) {
  return (
    <>
      <section>
        <div className='d-flex flex-column container py-d9 justify-content-center align-items-center '>
          <h2 className='text-secondary text-center'>Blog Yazılarım</h2>
          <form
            className='d-flex'
            style={{
              maxWidth: 600,
            }}
          >
            <input
              className='form-control me-2'
              type='search'
              placeholder='Ara'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='Button'>
              Ara
            </button>
          </form>
        </div>
      </section>
      <section className='bg-light'>
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
  const querySnapshot = await getDocs(collection(db, 'blogs'));
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });

  return { posts: posts };
};
