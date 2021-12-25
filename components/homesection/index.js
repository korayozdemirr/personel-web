import LeftSide from './LeftSide';
import RightSide from './RightSide';

export default function index() {
  return (
    <div className='container' style={{ paddingTop: '90px' }}>
      <div className='row'>
        <div className='col-lg-6'>
          <LeftSide />
        </div>
        <div className='col-lg-6 position-relative'>
          <RightSide />
        </div>
      </div>
    </div>
  );
}
