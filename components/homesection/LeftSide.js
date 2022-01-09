import Link from 'next/link';

export default function LeftSide() {
  return (
    <>
      <b className='fs-4' style={{ color: '#adb5bd' }}>
        Merhaba
      </b>
      <h2 className='fs-4'>
        Ben <b className='fs-4'>Koray Özdemir.</b> Ben bir{' '}
        <b className='fs-4'>Yazılım</b> geliştiricisiyim.
      </h2>
      <p className='fs-6'>
        Uzun süreden beridir yazılım üzerinde çalışıyorum.
        <b>Javascript, Html5, Css3</b> yazılım dillerine hakimim. Çeşitli
        kütüphaneler kullanarak sizler için mobil ve masaüstü uygulamalar
        geliştirebilir veya size ait kişisel web sitenizi oluşturabilirim.
      </p>
      <div className='mt-5'>
        <Link href='/blogs'>
          <a title='Yazılar' className='btn btn-dark me-3 btn-lg'>
            Yazılar
          </a>
        </Link>
        <Link href='/portfolio'>
          <a title='Portfolyo' className='btn btn-outline-dark btn-lg'>
            Portfolio
          </a>
        </Link>
      </div>
    </>
  );
}
