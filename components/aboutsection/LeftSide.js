import Image from 'next/image';
export default function LeftSide() {
  return (
    <Image
      src='/about.jpg'
      height={800}
      width={800}
      alt='Koray Özdemir'
      className='rounded'
    />
  );
}
