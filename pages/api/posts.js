import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Posts = async (req, res) => {
  res.status(200).json({ name: 'koray özdemir' });
};
export default Posts;
