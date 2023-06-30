import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { google, facebook, auth } from "./firebase_config";

export const signIn_email = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch {
    (err: string) => {
      console.error(err);
    };
  }
};

export const signIn_google = async () => {
  try {
    await signInWithPopup(auth, google);
  } catch {
    (err: string) => console.error(err);
  }
};

export const signIn_facebook = async () => {
  try {
    await signInWithPopup(auth, facebook);
  } catch {
    (err: string) => console.error(err);
  }
};
