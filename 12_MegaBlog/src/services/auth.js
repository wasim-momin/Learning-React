import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class Auth {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.serverUrl).setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  async signup({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      const currentUser = await this.getCurrentUser()
      if (!currentUser) {
        // call another method
        alert(`${name} congrats Account is created`);
        return this.signin(email, password);
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async signin({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("login error", error.message);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("current user", error.message);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("logout error", error.message);
    }
  }
}

const auth = new Auth();

export default auth;
