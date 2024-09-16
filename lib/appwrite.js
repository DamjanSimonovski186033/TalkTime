import { Account, Avatars, ID, Client, Databases } from 'react-native-appwrite'

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'mk.ukim.finki.sesh',
    projectId: '66e827e600202f979667',
    databaseId: '66e829c2002281e6c06b',
    userCollectionId: '66e829e1000dc5f2f6e5',
    storageId: '66e82f66002bbb6ed978'
}

const client = new Client()

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)

const account = new Account(client)
const avatars = new Avatars(client)
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
    try{
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error

        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password)

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        ) 
        return newUser
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export async function signIn(email, password){
    try{
        const session = await account.createEmailPasswordSession(email, password)

        return session
    } catch(error){
        throw new Error(error)
    }
}