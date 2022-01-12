import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';
export default function Services() {
  return (
    <>
      <section>
        <div className='container py-d9'>
          <h2 className='text-secondary text-center'>Servisler</h2>
        </div>
      </section>
      <section className='bg-light'>
        <div className='container py-d9'>
          <div className='row'>
            <div className='col-lg-4 my-5'>
              <div className='card'>
                <Image
                  src='/website.png'
                  height={200}
                  width={300}
                  className='card-img-top'
                  alt='website'
                />
                <div className='card-body'>
                  <h3 className='card-title'>Web Sitesi</h3>

                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>Mobil uyumlu</li>
                    <li className='list-group-item'>Özgün Tema</li>
                    <li className='list-group-item'>Seo Dostu</li>
                    <li className='list-group-item'>Dinamik Yapı</li>
                    <li className='list-group-item'>
                      Modern Kullanıcı Arayüzü
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 my-5'>
              <div className='card'>
                <Image
                  src='/mobile.png'
                  height={200}
                  width={300}
                  className='card-img-top'
                  alt='mobile-app'
                />
                <div className='card-body'>
                  <h3 className='card-title'>Mobil Uygulama</h3>

                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>Android uyumlu</li>
                    <li className='list-group-item'>Ios uyumlu</li>
                    <li className='list-group-item'>Özgün Tema</li>
                    <li className='list-group-item'>Dinamik Yapı</li>
                    <li className='list-group-item'>
                      Modern Kullanıcı Arayüzü
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 my-5'>
              <div className='card'>
                <Image
                  src='/desktop.png'
                  height={200}
                  width={300}
                  className='card-img-top'
                  alt='mobile-app'
                />
                <div className='card-body'>
                  <h3 className='card-title'>Masaüstü Uygulama</h3>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      Tüm işletim sistemleri ile uyumlu
                    </li>
                    <li className='list-group-item'>Hızlı</li>
                    <li className='list-group-item'>Özgün Tema</li>
                    <li className='list-group-item'>Dinamik Yapı</li>
                    <li className='list-group-item'>
                      Modern Kullanıcı Arayüzü
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
