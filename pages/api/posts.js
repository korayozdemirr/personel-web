import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
const posts = [];
export default async (req, res) => {
  const querySnapshot = await getDocs(collection(db, 'blogs'));
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });
  res.status(200).json(posts);
};
