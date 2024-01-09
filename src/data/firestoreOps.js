import { collection, getCountFromServer, getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function getRegistrationCount() {
  // const coll = collection(db, "registrations");
  // const snapshot = await getCountFromServer(coll);
  // return snapshot.data().count;
  const docRef = doc(db, "count", "count"); //collection(db, "registrations");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().count;
  } else {
    const countRef = collection(db, "count");
    await setDoc(doc(countRef, "count"), {count: 0});
    return 0;
  }
}

export async function changeCountBy(amount) {
  const docRef = doc(db, "count", "count");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const oldCount = docSnap.data().count;
    await setDoc(doc(db, "count", "count"), {count: oldCount + amount});

  }
}
