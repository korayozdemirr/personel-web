import LeftSide from './LeftSide';
import RightSide from './RightSide';

export default function index() {
  return (
    <header className='d-flex position-relative' style={{ height: '90px' }}>
      <nav
        className='navbar bg-light navbar-light navbar-expand-lg fixed-top'
        style={{
          boxShadow: '0 14px 9px rgb(0 0 0 /5%)',
          height: '90px',
        }}
      >
        <div className='container'>
          <LeftSide />
          <RightSide />
        </div>
      </nav>
    </header>
  );
}
