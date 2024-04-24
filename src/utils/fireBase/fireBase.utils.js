import { initializeApp } from "firebase/app";
import {
  getAuth
  ,GoogleAuthProvider
  ,signInWithPopup
,signInWithRedirect,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from "firebase/auth"
import {doc,getDoc,setDoc,getFirestore ,collection,writeBatch,query,getDocs, QuerySnapshot} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBV9P1Uhk-AepKpzms4J6fY7AASx-yMrF0",
  authDomain: "clothing-store-7d0e3.firebaseapp.com",
  projectId: "clothing-store-7d0e3",
  storageBucket: "clothing-store-7d0e3.appspot.com",
  messagingSenderId: "34705700402",
  appId: "1:34705700402:web:eaf27e36aecbf81e79ee2b"
};

const firebaseApp = initializeApp(firebaseConfig);

const Googleprovider= new GoogleAuthProvider();
Googleprovider.setCustomParameters({
    prompt:"select_account"
});

export const auth=getAuth();
export const signInWithGooglePopup=()=> signInWithPopup(auth,Googleprovider);  
export const signInWithGoogleRedirect=()=> signInWithRedirect(auth,Googleprovider);  

export const db=getFirestore();

export const AddcollectionAndDocument=async(collecctionKey,objectToAdd)=>{
  const collectionRef=collection(db,collecctionKey);   //دي بتاخد المكان واسم 
  const batch=writeBatch(db);

  objectToAdd.forEach((object) => {
    const docRef=doc(collectionRef,object.title.toLowerCase());    //دي بتاخد المكان و اسم العنصر من العناصر
    batch.set(docRef,object)                                  //دي بتاخد الداتا والعنصر اللي سوف يضاف
  });
 await batch.commit();
 console.log('data is set')
}
/////////////////////////////////////////////////////////////////////////
// دي طريقة لتحميل معلومات من فايرباز 
export const getCategoriesAndDocument=async()=>{
  const collecctionRef=collection(db,'categories');
  const q=query(collecctionRef);

  const querySnapshot=await getDocs(q);
   return querySnapshot.docs.map(docSnapshot=>docSnapshot.data())
  // قمنا بعمل المعادله ^ بدل من ↓ بهذه الطريق عملنا للداتا ارسال زي م هي وبيتم اخيار   المناسب في كاتوجري سيليكتور 
  //  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});
  // return categoryMap;
}
export const createUserDocumentFromAuth=async(userAuth ,additionalInformation={})=>{
    if(!userAuth)return;
    const userDocRef=doc(db,'users',userAuth.uid)
    console.log(userDocRef)

    const userSnapshot=await getDoc(userDocRef)
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName,email}=userAuth;
        const creatAt=new Date();

        try{
          await setDoc(userDocRef,{displayName,email,creatAt ,...additionalInformation })
        }
        catch(error){ console.log('error create the user :',error) }
    }
    return userDocRef
}

export const createAuthUserWithEmailAndPassword =async(Email,Password )=>{
  if(!Email || !Password) return;

   return await createUserWithEmailAndPassword(auth,Email,Password )
}

export const SignInAuthUserWithEmailAndPassword =async(Email,Password )=>{
  if(!Email || !Password) return;

   return await signInWithEmailAndPassword(auth,Email,Password )
}

export const signOutUser=async()=> await signOut(auth);

export const onAuthStateChangedListener=(callBack)=>onAuthStateChanged(auth,callBack)