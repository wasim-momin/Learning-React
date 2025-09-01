import { Account, Client, ID, Storage } from "appwrite";
import conf from "../conf/conf";

class FileUploadService {
  client = new Client();
  account;
  storage;

  constructor() {
    this.client.setEndpoint(conf.serverUrl).setProject(conf.projectId);
    this.account = new Account(this.client);
    this.storage = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(conf.storageId, ID.unique(), file);
    } catch (error) {
      console.log("upload file", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.storageId, fileId);
      return true;
    } catch (error) {
      console.log("upload file", error);
      return false;
    }
  }

  previewFile(fileId) {
    return this.storage.getFilePreview(conf.storageId, fileId);
  }
}

export const fileUploadService = new FileUploadService();

export default fileUploadService;
