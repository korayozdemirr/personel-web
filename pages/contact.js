import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
export default function about() {
  return (
    <>
      <section>
        <div className='container py-d9'>
          <h2 className='text-secondary text-center'>İletişim</h2>
        </div>
      </section>
      <section className='bg-light'>
        <div className='container py-d9'>
          <div className='row'>
            <div className='col-lg-6 fs-5'>
              <div className=' d-flex align-items-center'>
                <div className='me-3' style={{ marginTop: '-50px' }}>
                  <span className='bi bi-telephone-fill'></span>
                </div>
                <div>
                  <h3 className='fs-4'>Bizi Arayın</h3>
                  <p>
                    <a href='tel:+905061717645'>+90-506-171-76-45</a>
                  </p>
                </div>
              </div>
              <div className=' d-flex align-items-center'>
                <div className='me-3' style={{ marginTop: '-50px' }}>
                  <span className='bi bi-envelope'></span>
                </div>
                <div>
                  <h3 className='fs-4'>Mail Gönderin</h3>
                  <p>
                    <a href='mailto:korayozdemirdev@gmail.com'>
                      korayozdemirdev@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className=' d-flex align-items-center mb-4'>
                <div className='me-3' style={{ marginTop: '-105px' }}>
                  <span className='bi  bi-cursor-fill'></span>
                </div>
                <div className='me-2'>
                  <h3>Adres</h3>
                  <p>
                    KARAKAŞ MAH. ESKİ KAVAKLI YOLU CAD. BASARAN SITESI F1 BLOK
                    NO: 32F İÇ KAPI NO: 12 MERKEZ / KIRKLARELİ
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <form>
                <div className='row'>
                  <div className='col-lg-6 form-floating mb-3'>
                    <input
                      type='text'
                      placeholder='Adı Soyadı'
                      className='form-control'
                      id='floatingName'
                    />
                    <label
                      htmlFor='floatingName'
                      style={{ color: 'gray', paddingLeft: 18 }}
                    >
                      Adı Soyadı
                    </label>
                  </div>
                  <div className='col-lg-6 form-floating mb-3'>
                    <input
                      type='email'
                      placeholder='Email'
                      className='form-control'
                      id='floatingEmail'
                    />
                    <label
                      htmlFor='floatingEmail'
                      style={{ color: 'gray', paddingLeft: 18 }}
                    >
                      Email
                    </label>
                  </div>
                  <div className='col-lg-12 form-floating mb-3'>
                    <input
                      type='text'
                      placeholder='Konu'
                      className='form-control'
                      id='floatingSubject'
                    />
                    <label
                      htmlFor='floatingSubject'
                      style={{ color: 'gray', paddingLeft: 18 }}
                    >
                      Konu
                    </label>
                  </div>
                  <div className='form-floating col-lg-12 mb-3'>
                    <textarea
                      className='form-control'
                      placeholder='Leave a comment here'
                      id='floatingTextarea'
                      style={{ height: 150 }}
                    ></textarea>
                    <label
                      htmlFor='floatingTextarea'
                      style={{ color: 'gray', paddingLeft: 18 }}
                    >
                      Mesaj
                    </label>
                  </div>
                  <div className='col-lg-12'>
                    <button
                      className='btn btn-dark btn-lg'
                      style={{ float: 'right', width: 200 }}
                    >
                      Gönder
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
