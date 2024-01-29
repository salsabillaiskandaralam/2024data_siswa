import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
getFirestore,
collection, 
addDoc, 
getDocs, 
deleteDoc, 
doc, 
query, 
orderby
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCbewR7btYDgZ8EWsuSJJzTTVHkV4p--F0",
  authDomain: "cipi-capa.firebaseapp.com",
  projectId: "cipi-capa",
  storageBucket: "cipi-capa.appspot.com",
  messagingSenderId: "657661237676",
  appId: "1:657661237676:web:d55836db470ebd92a34209",
  measurementId: "G-NW59BY1TN1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarSiswa (){
  const siswaRef = collection(db,"siswa");
  const q = query (siswaRef, orderby("nama")); 
  const querySnapshot = await getDocs(q);
  let retval = [];
  querySnapshot.forEach((doc)=> {
    retval.push({id: doc.id,nama:doc.data().nama});
   
   return retval; 
  })i
}