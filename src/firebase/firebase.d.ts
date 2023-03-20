declare module 'firebase' {
    interface FirebaseOptions {
      apiKey: string;
      authDomain: string;
      projectId: string;
      storageBucket: string;
      messagingSenderId: string;
      appId: string;
      measurementId: string;
    }
  
    interface Firebase {
      firestore(): FirebaseFirestore.Firestore;
    }
  
    function initializeApp(options: FirebaseOptions): Firebase;
  }