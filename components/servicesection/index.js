import Link from 'next/link';

export default function index() {
  return (
    <div className='container' style={{ paddingBottom: 90, paddingTop: 90 }}>
      <div className='text-center pb-4'>
        <h2 className='text-secondary'>Hizmetler</h2>
        <h3>Sizin İçin Neler Yapabilirim?</h3>
      </div>
      <div className='row'>
        <div className='col-lg-4 my-4'>
          <div className='card' style={{ height: 220 }}>
            <div className='card-header d-flex align-items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                fill='currentColor'
                className='bi bi-shop-window me-2 mb-2'
                viewBox='0 0 16 16'
              >
                <path d='M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z' />
              </svg>
              <h3 className='fs-4'>Dijital Pazarlama</h3>
            </div>
            <div className='card-body py-4'>
              <p className='card-text'>
                Sizin İçin şirketinizi veya ürünlerinizi dijital platformlarda
                en iyi şekilde tanıtabilirim. Web sitenizin <b>seo</b>{' '}
                işlemlerini yürütebilirim
              </p>
              <Link href='/services'>
                <a title='Yazının devamını oku' className='card-link'>
                  Devamını Oku..
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-lg-4 my-4'>
          <div className='card' style={{ height: 220 }}>
            <div className='card-header d-flex align-items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                fill='currentColor'
                className='bi bi-laptop me-2 mb-2'
                viewBox='0 0 16 16'
              >
                <path d='M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z' />
              </svg>
              <h3 className='fs-4'>Web Sitesi</h3>
            </div>
            <div className='card-body py-4'>
              <p className='card-text'>
                Kişisel veya şirketiniz için kurumsal web sitenizi her
                platformda düzgün gözükecek şekilde geliştirebilirim.
              </p>
              <Link href='/services'>
                <a title='Yazının devamını oku' className='card-link'>
                  Devamını Oku..
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-lg-4 my-4'>
          <div className='card' style={{ height: 220 }}>
            <div className='card-header d-flex align-items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                fill='currentColor'
                className='bi bi-apple me-2 mb-2'
                viewBox='0 0 16 16'
              >
                <path d='M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z' />
                <path d='M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z' />
              </svg>
              <h3 className='fs-4'>Mobil Uygulama</h3>
            </div>
            <div className='card-body py-4'>
              <p className='card-text'>
                Sizin için Android ve Ios platformlarında kusursuz çalışan mobil
                uygulamarınızı geliştirebilirim
              </p>
              <Link href='/services'>
                <a title='Yazının devamını oku' className='card-link'>
                  Devamını Oku..
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <Link href='/services'>
          <a title='Tüm servisleri Gör' className='btn btn-link'>
            Tüm Servisleri Gör {'->'}
          </a>
        </Link>
      </div>
    </div>
  );
}
