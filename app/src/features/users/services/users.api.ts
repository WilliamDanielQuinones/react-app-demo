import qs from "qs"
import { IUser } from "features/users/types/users.types";

class UsersApiSingleTon {
  async getMany(rawQuery: any) {
    const query = qs.stringify(rawQuery)
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?${query}`);
        const data = await response.json();
        return data as IUser[] || [];
    } catch (error) {
        console.log('error fetching users', error)
        return [] 
    }
  }
}

export const usersApi = new UsersApiSingleTon()