import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Posts = async (req, res) => {
  const posts = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    querySnapshot.forEach((doc) => {
      posts.push(doc.data());
    });
  } catch (e) {
    res.status(400).end();
  }
  res.status(200).json(posts);
};
export default Posts;
