import SocialMedia from './SocialMedia';

export default function index() {
  return (
    <>
      <hr style={{ marginTop: '90px' }} />
      <footer className='align-items-center d-flex'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mt-4'>
              <p
                className='fs-5 text-center  text-lg-start'
                style={{ height: '30px' }}
              >
                © 2021 <b>Koray Özdemir.</b> Bütün Hakları Saklıdır.
              </p>
            </div>
            <div className='col-lg-4 d-flex align-items-center justify-content-end my-4'>
              <SocialMedia />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
