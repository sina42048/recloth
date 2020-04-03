import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB2m5Cas1RLwVp1pdVjBeuJBy9Uhlyhkfo",
    authDomain: "clothing-46346.firebaseapp.com",
    databaseURL: "https://clothing-46346.firebaseio.com",
    projectId: "clothing-46346",
    storageBucket: "clothing-46346.appspot.com",
    messagingSenderId: "866734632704",
    appId: "1:866734632704:web:99870326e7c85a969d8de5",
    measurementId: "G-M5KL4HQ0MK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();


    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const convertCollectionSnapShotToMap = (collections) => {
    const transformCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {})
}

// export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
//     const collectionRef = firestore.collection(collectionKey);
    
//     const batch = firestore.batch();
//     objectToAdd.forEach(obj => {
//         const newDocRef = collectionRef.doc();
//         batch.set(newDocRef, obj);
//     });

//     return await batch.commit();

// }

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;