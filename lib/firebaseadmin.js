import admin from 'firebase-admin';
import serviceAccount from "./planet-7e09a-firebase-adminsdk-xvp82-ef2683aac9.json";

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://planet-7e09a-default-rtdb.firebaseio.com"
      });      
}

export default admin;
