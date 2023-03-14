import { database } from "../adapters";
import { set, ref } from 'firebase/database';

export const writeUserData = (userId: string, companyName: string) => {
    set(ref(database, 'users/' + userId), {
      companyName: companyName
    });
  }