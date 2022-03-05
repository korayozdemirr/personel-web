import Image from 'next/image';
import BlogsLeft from '../../components/BlogsLeft';

const PostDetails = ({ data }) => {
  console.log(data);
  return (
    <>
      <section>
        <div className='container py-d9'>
          <h2 className='text-secondary text-center'>{data[0].title}</h2>
        </div>
      </section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='card' style={{ borderWidth: 0 }}>
              <Image
                src={data[0].imageSrc}
                width={500}
                height={500}
                className='card-img-top rounded'
              />
              <div className='card-body'>
                <h3 className='card-title'>{data[0].title}</h3>
                <p className='card-text'>{data[0].content}</p>
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
  const res = await fetch(
    `http://localhost:3000/api/post/${context.params.PostDetails}`
  );
  const data = await res.json();
  if (data.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
