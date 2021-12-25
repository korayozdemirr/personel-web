import Image from 'next/image';
export default function RightSide() {
  return (
    <div
      className='d-flex  my-5 my-lg-0 position-relative'
      style={{
        minHeight: '400px',
        boxShadow: '1px 7px 40px 2px rgba(0,0,0,0.75)',
      }}
    >
      <Image
        src='/profil.jpg'
        alt='koray özdemir'
        layout='fill'
        className=' rounded'
      />
    </div>
  );
}
