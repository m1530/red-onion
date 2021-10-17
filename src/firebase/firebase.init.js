import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const innitializationapp = () => {
    initializeApp(firebaseConfig);
}
export default innitializationapp;