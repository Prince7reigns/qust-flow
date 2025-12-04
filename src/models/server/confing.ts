import env from '@/src/env';
import {Client, Account,Avatars,Databases,Storage,Users} from 'node-appwrite';

let client = new Client();

client
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectid) // Your project ID
    .setKey(env.appwrite.projectid) // Your secret API key
;


const databases = new Databases(client)
const account = new Account(client);
const avatars = new Avatars(client)
const storage = new Storage(client)
const users = new Account(client)


export {client,avatars,account,databases,storage,users}