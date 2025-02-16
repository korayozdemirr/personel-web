import Image from 'next/image';
import Link from 'next/link';
const Post = ({ ...props }) => {
  return (
    <div className='card mb-4 bg-dark text-white' key={props.index}>
      <img
        src={props.image}
        width={300}
        height={300}
        loading='lazy'
        className='card-img-top'
      />
      <div className='card-body'>
        <p className='card-text text-secondary'>
          {props.date}-<b>{props.editor}</b>
        </p>
        <h3 className='card-title'>{props.title}</h3>
        <p>
          <Link href={'/post/' + props.slug}>
            <a title='readmore' className='btn btn-dark'>
              Devamını Oku..
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Post;
