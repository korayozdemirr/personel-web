import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Posts = async (req, res) => {
  const querySnapshot = await getDocs(collection(db, 'blogs'));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
  res.status(200).json(querySnapshot);
};
export default Posts;
