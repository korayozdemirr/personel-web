import React, { useState } from 'react';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { db } from '../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
export default function about() {
  const [successMessage, setSuccessMessage] = useState('');
  const sendMail = async (event) => {
    event.preventDefault();
    const docRef = await addDoc(collection(db, 'mails'), {
      fullName: event.target.fullName.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    });
    event.target.fullName.value = '';
    event.target.email.value = '';
    event.target.subject.value = '';
    event.target.message.value = '';
    setSuccessMessage('Mesaj Başarılı Bir Şekilde Gönderildi..');
  };
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
              {successMessage ? (
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
                      placeholder='Adı Soyadı'
                      name='fullName'
                      className='form-control'
                      id='floatingName'
                      required
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
                      name='email'
                      placeholder='Email'
                      className='form-control'
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
                      placeholder='Konu'
                      className='form-control'
                      id='floatingSubject'
                      name='subject'
                      required
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
                      name='message'
                      style={{ height: 150 }}
                      required
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
                      type='submit'
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
