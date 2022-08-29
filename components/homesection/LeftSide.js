import Link from 'next/link';
import { useSelector } from 'react-redux';
export default function LeftSide() {
  const theme = useSelector((state)=>state.theme.value)
  return (
    <>
      <b className='fs-3' style={{ color: '#adb5bd' }}>
        Hello World
      </b>
      <h2 className='fs-3'>
        I am <b className='fs-2'>Koray Ozdemir.</b>
      </h2>
      <p className='fs-3'>
      I'm a <b>MERN</b> stack developer from Turkey. I create custom websites to help businesses do better online.
      </p>
      <div className='mt-5'>
        <Link href='/about'>
          <a title='About Me' className={'btn me-3 btn-lg btn-'+theme[1]}>
            About Me
          </a>
        </Link>
        <Link href='/projects'>
          <a title='My Projects' className={'btn btn-lg btn-outline-'+theme[1]}>
          My Projects
          </a>
        </Link>
      </div>
    </>
  );
}
