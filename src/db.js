import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDE2l-8o23IXAm-0TESB5JVw9xNpAdjzfQ',
  authDomain: 'image-chat-d4988.firebaseapp.com',
  databaseURL: 'https://image-chat-d4988.firebaseio.com',
  projectId: 'image-chat-d4988',
  storageBucket: 'image-chat-d4988.appspot.com',
  messagingSenderId: '604178098217'
})

const db = firebaseApp.database()

export const imagesRef = db.ref('images')
