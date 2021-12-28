import Link from 'next/link';
import { useRouter } from 'next/router';
export default function RightSide() {
  const router = useRouter();
  return (
    <div
      className='offcanvas offcanvas-start bg-light'
      style={{ maxWidth: '80%' }}
      tabIndex={-1}
      id='offcanvasNavbar'
      aria-labelledby='offcanvasNavbarLabel'
    >
      <div className='offcanvas-header' style={{ height: '90px' }}>
        <p className='offcanvas-title fs-2' id='offcanvasNavbarLabel'>
          Koray Özdemir
        </p>
        {/* <button
          type='button'
          className='btn-close  text-reset'
          data-bs-dismiss='offcanvas'
          aria-label='Close'
        /> */}
      </div>
      <div className='offcanvas-body'>
        <ul className='navbar-nav justify-content-end flex-grow-1 pe-3 fs-5'>
          <li className='nav-item'>
            <Link href='/'>
              <a
                className={
                  router.pathname == '/' ? 'nav-link active' : '' + 'nav-link'
                }
                aria-current='page'
                title='Anasayfa'
              >
                Ana Sayfa
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about'>
              <a
                className={
                  router.pathname == '/about' ? 'nav-link active' : 'nav-link'
                }
                title='Hakkımda'
              >
                Hakkımda
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about'>
              <a
                className={
                  router.pathname == '/services'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                title='Servisler'
              >
                Servisler
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about'>
              <a
                className={
                  router.pathname == '/contact' ? 'nav-link active' : 'nav-link'
                }
                title='İletişim'
              >
                İletişim
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
