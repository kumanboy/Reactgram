import {Databases, Avatars, Storage,Account,Client} from 'appwrite'

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL
}

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint('https://cloud.appwrite.io/v1');
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);