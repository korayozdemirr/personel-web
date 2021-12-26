import Link from 'next/link';
export default function LeftSide() {
  return (
    <>
      <Link href='/'>
        <a title='Anasayfa' className='navbar-brand'>
          <h1 className='fs-2 fw-normal'>Koray Özdemir</h1>
        </a>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasNavbar'
        aria-controls='offcanvasNavbar'
      >
        <span className='navbar-toggler-icon' />
      </button>
    </>
  );
}
