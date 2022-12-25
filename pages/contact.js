import { useState } from 'react';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { db } from '../firebase/firebaseConfig';
import { useSelector } from 'react-redux';
import { addDoc, collection } from 'firebase/firestore';
export default function Contact() {
  const [Message, setMessage] = useState(false);
  const theme = useSelector(state=>state.theme.value)
  const sendMail = async (event) => {
    event.preventDefault();
    await addDoc(collection(db,"mails"),{
      fullName: event.target.fullName.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    })
    event.target.fullName.value = '';
    event.target.email.value = '';
    event.target.subject.value = '';
    event.target.message.value = '';
    setMessage(true);
  };
  return (
    <>
      <section className={'bg-'+theme[0]}>
        <div className='container py-d9'>
          <h2 className='text-secondary text-center'>Contact Me</h2>
        </div>
      </section>
      <section  className={'bg-'+theme[0]+" "+"text-"+theme[1] }>
        <div className='container py-d9'>
          <div className='row'>
            <div className='col-lg-6 fs-5'>
              <div className=' d-flex align-items-center'>
                <div className='me-3' style={{ marginTop: '-50px' }}>
                  <span className='bi bi-telephone-fill'></span>
                </div>
                <div>
                  <h3 className='fs-4'>Call Me</h3>
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
                  <h3 className='fs-4'>Email</h3>
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
                  <h3>Address</h3>
                  <p>
                    KARAKAŞ MAH. ESKİ KAVAKLI YOLU CAD. BASARAN SITESI F1 BLOK
                    NO: 32F İÇ KAPI NO: 12 MERKEZ / KIRKLARELİ - TURKEY
                  </p>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              {Message ? (
                <div className='alert alert-success' role='alert'>
                  Mesaj Başarılı Bir Şekilde Gönderildi..
                </div>
              ) : (
                ''
              )}

              <form onSubmit={sendMail}>
                <div className='row'>
                  <div className='col-lg-6 form-floating mb-3'>
                    <input
                      type='text'
                      placeholder='Full Name'
                      name='fullName'
                      className={'form-control bg-'+theme[0]+" "+"text-"+theme[1]}
                      id='floatingName'
                      required
                    />
                    <label
                      htmlFor='floatingName'
                      style={{ color: 'gray', paddingLeft: 18 }}
                    >
                      Full Name
                    </label>
                  </div>
                  <div className='col-lg-6 form-floating mb-3'>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      className={'form-control bg-'+theme[0]+" "+"text-"+theme[1]}
                      id='floatingEmail'
                      required
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
                      placeholder='Subject'
                      className={'form-control bg-'+theme[0]+" "+"text-"+theme[1]}
                      id='floatingSubject'
                      name='subject'
                      required
                    />
                    <label
                      htmlFor='floatingSubject'
                      style={{ color: 'gray', paddingLeft: 18 }}
                    >
                      Subject
                    </label>
                  </div>
                  <div className='form-floating col-lg-12 mb-3'>
                    <textarea
                      className={'form-control bg-'+theme[0]+" "+"text-"+theme[1]}
                      placeholder='Leave a comment here'
                      id='floatingTextarea'
                      name='message'
                      style={{ height: 150 }}
                      required
                    ></textarea>
                    <label
                      htmlFor='floatingTextarea'
                      style={{ color: 'gray', paddingLeft: 18 }}
                    >
                      Message
                    </label>
                  </div>
                  <div className='col-lg-12'>
                    <button
                      type='submit'
                      className={'btn btn-lg btn-'+theme[1]}
                      style={{ float: 'right', width: 200 }}
                    >
                      Submit
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
