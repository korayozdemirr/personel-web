import { useSelector } from 'react-redux';
import SocialMedia from './SocialMedia';
export default function index() {
  const theme = useSelector(state=>state.theme.value)
  return (
    <>
      <footer className={'align-items-center d-flex bg-'+theme[0]+" "+"text-"+theme[1] }>
      
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mt-4'>
              <p
                className='fs-5 text-center  text-lg-start'
                style={{ height: '30px' }}
              >
                © 2021 <b>Koray Özdemir.</b> All Rights Reserved..
              </p>
            </div>
            <div className='col-lg-4 d-flex align-items-center justify-content-center  justify-content-lg-end my-4'>
              <SocialMedia theme={theme}/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
