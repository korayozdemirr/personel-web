import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default async (req, res) => {
  const posts = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    querySnapshot.forEach((doc) => {
      posts.push(doc.data());
    });
    res.status(200).json({ posts });
  } catch (e) {
    res.status(400).end();
  }
};
