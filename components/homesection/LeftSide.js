export default function LeftSide() {
  return (
    <>
      <b className='fs-4' style={{ color: '#adb5bd' }}>
        Merhaba
      </b>
      <h1 className='fs-4'>
        Ben <b className='fs-4'>Koray Özdemir.</b> Ben bir{' '}
        <b className='fs-4'>dijital pazarlama</b> uzmanıyım.
      </h1>
      <p className='fs-6'>
        Uzun süreden beridir dijital pazarlama üzerinde çalışıyorum.
        Müşterilerin internette sizi bulmasını sağlamak için web sitelerinden
        yerel işletme girişlerine, mobil uygulamalardan sosyal medyaya kadar
        uzanan çok çeşitli yollar var. Ben bu yolları sizin için
        oluşturabilirim.
      </p>
      <div className='mt-5'>
        <button className='btn btn-primary me-3 btn-lg'>Hire me</button>
        <button className='btn btn-outline-primary btn-lg'>Portfolio</button>
      </div>
    </>
  );
}
