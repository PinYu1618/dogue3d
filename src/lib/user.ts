import UserModel from '@/lib/models/user.model'
//import dbConnect from './dbConnect'
import crypto from 'crypto'
import { connect } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
//import { connectDB } from './connectDB'
//import { connectDB } from '@/lib/connectDB'
//import User from '@/models/User'

//import redis from './redis'

const uri: string = process.env.MONGO_URL

//@ts-ignore
export async function createUser(name: string, pswrd: crypto.BinaryLike) {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.pbkdf2Sync(pswrd, salt, 1000, 64, 'sha512').toString('hex')
  const user = {
    id: uuidv4(),
    name,
    createdAt: Date.now(),
    hash,
    salt
  }

  //await dbConnect()
  //await connectDB()
  try {
    await connect(uri)
    await new UserModel({ ...user }).save()
    return { id: user.id, name: user.name, createdAt: user.createdAt }
  } catch (e) {
    console.log(e)
  }
}

export async function findUserByName(name: string) {
  //await connectDB()
  //await dbConnect()
  try {
    await connect(uri)
    let user = await UserModel.findOne({ name })
    return user
  } catch (e) {
    console.log(e)
  }
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
//@ts-ignore
export async function validatePassword(user, inputPassword) {
  const inputHash = crypto.pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512').toString('hex')
  const passwordsMatch = user.hash === inputHash
  return passwordsMatch
}
