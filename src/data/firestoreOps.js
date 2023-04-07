import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function getRegistrationCount() {
  const coll = collection(db, "registrations");
  const snapshot = await getCountFromServer(coll);
  return snapshot.data().count;
}