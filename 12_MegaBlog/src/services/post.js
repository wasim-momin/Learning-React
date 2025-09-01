import conf from "../conf/conf";
import { Client, Databases, Query, Account } from "appwrite";

export class PostService {
  client = new Client();
  databases;
  account;

  constructor() {
    this.client.setEndpoint(conf.serverUrl).setProject(conf.projectId);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
  }

  async createPost({ title, slug, content, postImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.collectionId,
        slug, // document id main hum slug hi pass kare ge
        {
          title,
          content,
          postImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("create post", error);
    }
  }

  async updatePost(slug, {title, content, postImage, status}){
    try{
        return await this.databases.updateDocument(
            conf.databaseId,
            conf.collectionId,
            slug,
            {
                title,
                content,
                postImage,
                status
            }
        )
    }catch(error){
        console.log("update post", error);
    }
  }

  async deletePost(slug){
    try{
        await this.databases.deleteDocument(
            conf.databaseId,
            conf.collectionId,
            slug
        )
        return true
    }catch(error){
        console.log("delete post", error);
        return false
    }
  }

  async getPost(slug){
    try{
        return await this.databases.getDocument(
            conf.databaseId,
            conf.collectionId,
            slug
        )
    }catch(error){
        console.log("details post", error);
    }
  }

  //Note:  yaha per jo query lagai hai wo index hum ne create kiya hai appwrite main to query ke liye index banan zarroi hai
  async getAllPosts(queries = [Query.equal("status", "active")]){ 
    try{
        return await this.databases.listDocuments(
            conf.databaseId,
            conf.collectionId,
            queries,
            // [
            //     Query.equal("status", "active") aise bhi hum query likh sakte hai
            // ]
        )
    }catch(error){
        console.log("all post list", error);
    }
  }

}

export const postService = new PostService();

export default postService;
