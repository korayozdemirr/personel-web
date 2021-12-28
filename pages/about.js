import Image from 'next/image';
import Link from 'next/link';
import SocialMedia from '../components/footer/SocialMedia';

export default function about() {
  return (
    <>
      <section>
        <div className='container py-d9'>
          <h1 className='text-secondary text-center'>Hakkımda</h1>
        </div>
      </section>
      <section className='bg-light'>
        <div className='container py-d9'>
          <div className='row'>
            <div className='col-lg-4'>
              <Image
                src='/about.jpg'
                height='800'
                width='800'
                alt='Koray Özdemir'
                className='rounded'
              />
            </div>
            <div className='col-lg-8'>
              <h2>Özgeçmiş</h2>
              <p>
                1994 yılında {"İzmir'de"} doğdum. Kırklareli şehirinde
                yaşamaktayım. Mehmet Akif Ersoy Anadolu Meslek Lisesi Bilgisayar
                Programcılığı (2012) mezunuyum. 2013 - 2018 yılları arasında
                Kırklareli Üniversitesi Lüleburgaz Meslek Yüksek Okulu
                Bilgisayar Programcılığı(ön lisans) programından mezun oldum.
                Çalışmak zorunda olduğum için ilk 3 sene okula gidemediğimden
                dolayı okulu geç bitirdim. Sonrasında 2018 - 2020 yıllarında
                dikey geçiş sınavı ile Anadolu Üniversitesi Yönetim Bileşim
                Sistemleri bölümününden mezun oldum.
              </p>
              <p>
                Yazılım ile lise zamanlarımda tanıştım. Uzun süreden beridir web
                teknolojileri ile ilgileniyorum. Hem front-end hemde back-end
                sistemlerinde geliştirme yapabiliyorum. Ayrıca android ve Ios
                platformlarında eş zamanlı çalışabilen mobil uygulama ve
                masaüstü uygulamarıda geliştirebiliyorum.
              </p>
              <hr />
              <div className='d-flex align-items-center justify-content-between'>
                <Link href='https://www.linkedin.com/ambry/?x-li-ambry-ep=AQFjydaZ1hmYxwAAAX4Cj9QULXRtJ52emheoE8oR4_fin0pRTWcAcZnjerSijrsqsrnGns-lTYchTMLeYnPmeQ6tsBygIT_dQfYn-68HC4AXu0jXytzKuk-zf0XtyKZt-Q6WUNYl9UbyfBpaxok6qQIZnqrHS4x8KW1jmatDWtCF25G_toPhMCPfetuP5EoNdzRJcxqYievEhA_3-BXSbRMw9zNavGJqD19mpHbjh7CjRTxTPeDRHcI8fctOcuwJUzElONBCMx6FHxkYgfp_CoZTk4v0hUCwhNw3ir4inEEnwfCJrzA7q1Dmhy4V-ZzfsOuUsMy532HTxG7ntrzQfPOfaLGV2rjNs1mFgBbVDcP2cdy0KOeiV0Rd-Ti4P7QC4Ddv2gZyEE-KlJuMJPX3hBX_cTIGxKul5CN1FAyyknDwDoeya2N6iZWbhYacbw1hy741JDDzk9jzkcfG3wh6kNIdddeya--dFg3tqBd1pP5Hui9nMIKQPPlBmqvHk9qqaFnwCp59hLO8rfjls8agTw&x-ambry-um-filename=Profile.pdf'>
                  <a rel='nofollow' className='btn btn-outline-dark'>
                    PDF Olarak İndir
                  </a>
                </Link>
                <div className='d-flex align-items-center'>
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
