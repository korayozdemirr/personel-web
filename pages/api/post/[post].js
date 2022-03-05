import { db } from '../../../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default async (req, res) => {
  const posts = [];
  const q = query(collection(db, 'blogs'), where('slug', '==', req.query.post));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });
  res.json(posts);
};
