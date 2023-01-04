import { Model, Schema } from 'mongoose'

import { User } from '@/interfaces'
import createModel from '@/lib/createModel'

type UserModel = Model<User, {}>

const userSchema = new Schema<User, UserModel>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Number },
  hash: { type: String, required: true },
  salt: { type: String, required: true }
})

export default createModel<User, UserModel>('user', userSchema)
