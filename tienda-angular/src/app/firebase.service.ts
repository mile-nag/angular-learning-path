import { Injectable } from '@angular/core';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firebaseConfig = {
    apiKey: 'AIzaSyA03BelkFdqOjV4hT8s_EQZ0FzNhK8_TLo',
    authDomain: 'tienda-angular-909ba.firebaseapp.com',
    databaseURL: 'https://tienda-angular-909ba-default-rtdb.firebaseio.com',
    projectId: 'tienda-angular-909ba',
    storageBucket: 'tienda-angular-909ba.firebasestorage.app',
    messagingSenderId: '507496477867',
    appId: '1:507496477867:web:9a9abb968e226629ecf3ee',
  };

  public auth: Auth;
  public firebase: Firestore;

  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);
  }
}
