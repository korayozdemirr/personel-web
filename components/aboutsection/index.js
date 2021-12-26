import LeftSide from './LeftSide';
import RightSide from './RightSide';
export default function index() {
  return (
    <div className='container' style={{ paddingTop: 90 }}>
      <div className='row'>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}
