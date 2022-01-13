import firebase from 'firebase';



const firebaseConfig = {
    apiKey: `${process.env.API_KEY}`,
    authDomain: `${process.env.AUTH_DOMAIN}`,
    projectId: `${process.env.PROJECT_ID}`,
    storageBucket: `${process.env.STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.MS_ID}`,
    appId: `${process.env.APP_ID}`
};


//* check if we already initalized the app
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig)
            : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };