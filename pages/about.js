import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import SocialMedia from '../components/footer/SocialMedia';

export default function About() {
  const theme = useSelector(state=>state.theme.value)
  return (
    <>
      <section className={'bg-'+theme[0]}>
        <div className='container py-d9'>
          <h2 className='text-secondary text-center'>About Me</h2>
        </div>
      </section>
      <section className={'bg-'+theme[0]+" "+ "text-"+theme[1]}>
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
              <p className='fs-3'>
               I'm a MERN stack developer from Turkey. I create custom websites to help businesses do better online
              </p>
              <p className='fs-4'>
              I’ve always been passionate about coding, and I’m eager to apply my programming skills to new pursuits. I love to interact with my team setting sharing my skills and knowledge. Having been studied on several programming languages, I can easily learn a new programming language and develop innovative applications.
              </p>
              <hr />
              <div className='d-flex align-items-center justify-content-between'>
                <Link href='https://www.linkedin.com/ambry/?x-li-ambry-ep=AQFjydaZ1hmYxwAAAX4Cj9QULXRtJ52emheoE8oR4_fin0pRTWcAcZnjerSijrsqsrnGns-lTYchTMLeYnPmeQ6tsBygIT_dQfYn-68HC4AXu0jXytzKuk-zf0XtyKZt-Q6WUNYl9UbyfBpaxok6qQIZnqrHS4x8KW1jmatDWtCF25G_toPhMCPfetuP5EoNdzRJcxqYievEhA_3-BXSbRMw9zNavGJqD19mpHbjh7CjRTxTPeDRHcI8fctOcuwJUzElONBCMx6FHxkYgfp_CoZTk4v0hUCwhNw3ir4inEEnwfCJrzA7q1Dmhy4V-ZzfsOuUsMy532HTxG7ntrzQfPOfaLGV2rjNs1mFgBbVDcP2cdy0KOeiV0Rd-Ti4P7QC4Ddv2gZyEE-KlJuMJPX3hBX_cTIGxKul5CN1FAyyknDwDoeya2N6iZWbhYacbw1hy741JDDzk9jzkcfG3wh6kNIdddeya--dFg3tqBd1pP5Hui9nMIKQPPlBmqvHk9qqaFnwCp59hLO8rfjls8agTw&x-ambry-um-filename=Profile.pdf'>
                  <a rel='nofollow' className={'btn btn-outline-'+theme[1]}>
                    Download Resume
                  </a>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
