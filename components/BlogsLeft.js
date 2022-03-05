import Link from 'next/link';
const BlogsLeft = () => {
  return (
    <>
      <div className='d-flex justify-content-start'>
        <input
          type='text'
          className='form-control me-2'
          id='searchInput'
          placeholder='Aranacak kelimeyi giriniz'
        />

        <button className='btn btn-dark btn-lg'>Ara</button>
      </div>
    </>
  );
};
export default BlogsLeft;
