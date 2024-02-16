import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getBlob } from "firebase/storage";

// TODO add data types for each example
/*
DocData for AddJob format:
  Customer_ID:
  Fill_Percentage:
  ID:
  Material:
  Printer_ID:
  Radius:
  STL:
  Status:
  Name:
  Email:
*/
export async function AddJob(db, DocData) {
  const docRef = await addDoc(collection(db, "Jobs"), DocData);
}

/*
DocData for AddCustomer format:
  Email:
  ID:
*/
export async function AddCustomer(db, DocData) {
  const docRef = await addDoc(collection(db, "Customers"), DocData);
}

/*
DocData for AddPrinter format:
  Email:
  ID:
*/
export async function AddPrinter(db, DocData) {
  const docRef = await addDoc(collection(db, "Printers"), DocData);
}

export async function GetJobs(field, comp, value, db) {
  const job = collection(db, "Jobs");
  const q = query(job, where(field, comp, value));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
}

export async function GetCustomer(field, comp, value, db) {
  const job = collection(db, "Customers");
  const q = query(job, where(field, comp, value));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
}

export async function GetPrinters(field, comp, value, db) {
  const job = collection(db, "Printers");
  const q = query(job, where(field, comp, value));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
}

// TODO rename to GetMaterials
export async function GetMaterial(db) {
  const docRef = collection(db, "Material");
  const querySnapshot = await getDocs(docRef);
  return querySnapshot;
}

export function addFile(file, path) {
  const storage = getStorage();
  const reference = ref(storage, path);
  uploadBytes(reference, file);
}

export function getFile(path) {
  const storage = getStorage();
  const reference = ref(storage, path);
  return getBlob(reference, 5000000);
}