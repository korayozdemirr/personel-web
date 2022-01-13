import Image from 'next/image';
import Link from 'next/link';
export default function Blogs() {
  return (
    <>
      <section>
        <div className='container py-d9'>
          <h2 className='text-secondary text-center'>Blog Yazılarım</h2>
        </div>
      </section>
      <section className='bg-light'>
        <div className='container py-d9'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='card'>
                <Image
                  src='https://i.ytimg.com/vi/lEHZbO3B374/hqdefault.jpg'
                  width={500}
                  height={500}
                  className='card-img-top'
                />
                <div className='card-body'>
                  <p className='card-text text-secondary'>
                    12 Ocak 2021-<b>Koray ÖZDEMİR</b>
                  </p>
                  <h3 className='card-title'>Hello World</h3>
                  <p>
                    <a title='readmore' className='btn btn-dark'>
                      Devamını Oku..
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='d-flex justify-content-start'>
                <input
                  type='text'
                  className='form-control me-2'
                  id='searchInput'
                  placeholder='Aranacak kelimeyi giriniz'
                />

                <button className='btn btn-dark btn-lg'>Ara</button>
              </div>
              <div className='mt-5'>
                <h3>Son Gönderilenler</h3>
                <Link href='#'>
                  <a className='link link-dark fs-4'>Hello World</a>
                </Link>
              </div>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-center mt-5'>
            <nav aria-label='Page navigation example'>
              <ul className='pagination'>
                <li className='page-item'>
                  <a className='page-link' href='#' aria-label='Previous'>
                    <span aria-hidden='true'>«</span>
                  </a>
                </li>
                <li className='page-item active'>
                  <a className='page-link' href='#'>
                    1
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    2
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    3
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#' aria-label='Next'>
                    <span aria-hidden='true'>»</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
