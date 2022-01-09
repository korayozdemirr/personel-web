import Link from 'next/link';
export default function RightSide() {
  return (
    <div className='mt-3 mt-lg-0'>
      <h3 className='fs-3'>Koray Özdemir Kimdir?</h3>
      <p>
        Kırklareli Üniversitesi Bilgisayar Programcılığı mezunuyum. Aynı zamanda
        Anadolu Üniversitesi Yönetim ve Bileşim Sistemleri bölmünüde bitirdim.
        Kendimi web teknolojileri ve mobil uygulamalar üzerinde geliştiriyorum.
        Son zamanlarda <b>Dijital Pazarlama</b> sektörünü merak etmekteyim.
        Google ve diğer eğitim platformlarından eğitimler alıp kendimi
        geliştirmekteyim.
      </p>
      <h3 className='fs-4'>İlgi Alanlarım Neler?</h3>
      <p>
        Kodlama konusunda her zaman yeni teknolojileri takip ediyorum. Front-end
        ve Back-end sistemleri üzerinde kendimi geliştiriyorum. Bu teknolojiler
        sayesinde hem web sitesi hemde mobil uygulama geliştiriyorum.
      </p>
      <hr />
      <div className='d-flex justify-content-end'>
        <Link href='/about'>
          <a
            className='btn btn-dark mt-2'
            title='Koray Özdemir hakkında detaylı bilgi için tıkla'
          >
            Devemını Gör
          </a>
        </Link>
      </div>
    </div>
  );
}
