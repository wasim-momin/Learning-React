import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthServices {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.serverUrl).setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        name,
        email,
        password
      );
      if (userAccount) {
        // call another method
        return this.login(email, password)
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login ({email, password}){
    try{
        return await this.account.createEmailPasswordSession(email, password)
    }catch(error){
        throw error
    }
  }

  async getCurrentUser (){
    try{
        return await this.account.get()
    }catch(error){
        console.log("App write :: getCurrentUser :: error", error)
    }
    return null
  }

  async logOut (){
    try{
        await this.account.deleteSessions()
    } catch(error){
        console.log("App write :: getCurrentUser :: error", error)
    }
  }


}

const authServices = new AuthServices();

export default authServices;
