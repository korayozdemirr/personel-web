import LeftSide from './LeftSide';
import RightSide from './RightSide';
export default function index() {
  return (
    <div className='container' style={{ paddingTop: 90 }}>
      <div className='row'>
        <div className='col-lg-4'>
          <LeftSide />
        </div>
        <div className='col-lg-8'>
          <RightSide />
        </div>
      </div>
    </div>
  );
}
