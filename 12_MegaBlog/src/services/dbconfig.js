import conf from "../conf/conf.js";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class DatabaseService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client.setEndpoint(conf.serverUrl).setProject(conf.projectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        {
          title,
          content,
          status,
          featuredImage,
          userId,
        }
      );
    } catch (error) {
      console.log("App write :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        {
          title,
          featuredImage,
          content,
          status,
        }
      );
    } catch (error) {
      console.log("App write :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("App write :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
    } catch (error) {
      console.log("App write :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(qureies = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.collectionId,
        qureies
      );
    } catch (error) {
      console.log("App write :: getPosts :: error", error);
      return false;
    }
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.storage.createFile(conf.bucketId, ID.unique(), file);
    } catch (error) {
      console.log("App write :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId){
    try{
        await this.storage.deleteFile(
            conf.bucketId,
            fileId
        )
        return true
    }catch (error) {
      console.log("App write :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId){
    return this.storage.getFilePreview(
      conf.bucketId,
      fileId
    )
  }

}

const databaseService = new DatabaseService();

export default databaseService;
