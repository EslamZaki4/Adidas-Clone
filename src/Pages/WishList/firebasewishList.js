import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../assets/Firebase/Firebase';


export const addProductToFirebase = async (productId) => {

  try {
    const userEmail = localStorage.getItem('email');
    const userDocRef = doc(db, 'wishlist', userEmail);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      await updateDoc(userDocRef, { fav: arrayUnion(productId) });
    } else {
      await setDoc(userDocRef, { fav: [productId] });
    }
    console.log('firebase request', 'add wishlist')
  } catch (error) {
    console.error('Error adding product to Firebase:', error);
  }
};

export const removeProductFromFirebase = async (productId) => {

  try {

    const userEmail = localStorage.getItem('email');
    const userDocRef = doc(db, 'wishlist', userEmail);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      await updateDoc(userDocRef, { fav: arrayRemove(productId) });
    }
    console.log('firebase request', 'remove wishlist')
  } catch (error) {
    console.error('Error removing product from Firebase:', error);
  }
};

export const getWishlistByEmail = async () => {
  try {
    const userEmail = localStorage.getItem('email');
    const userDocRef = doc(db, 'wishlist', userEmail);
    const userDocSnap = await getDoc(userDocRef);
    console.log('firebase request', 'email wishlist')
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const wishlist = userData.fav;
      return wishlist;
    } else {
      return []; // Return an empty array if the document doesn't exist
    }
  } catch (error) {
    console.error('Error getting product from Firebase:', error);
    return [];
  }
};




