import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD9DG-HM8PFAwYKktDxqMbDT-ZchYsPU18',
  authDomain: 'house-hunting-application.firebaseapp.com',
  databaseURL: 'https://house-hunting-application.firebaseio.com',
  projectId: 'house-hunting-application',
  storageBucket: 'house-hunting-application.appspot.com',
  messagingSenderId: '649740152286',
  appId: '1:649740152286:web:98441e66ab9d336a6d414f',
  measurementId: 'G-KLRKPSJFVY',
};

app.initializeApp(firebaseConfig);

export default app.database();
