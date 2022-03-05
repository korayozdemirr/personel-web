import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default async (req, res) => {
  const posts = [];
  const querySnapshot = await getDocs(collection(db, 'blogs'));
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });
  res.json(posts);
};
