import { model, Model, Schema } from 'mongoose'

export default function createModel<T, TModel = Model<T>>(
  modelName: string,
  schema: Schema<T>
): TModel {
  let createdModel: TModel
  //@ts-ignore
  if (!global[modelName]) {
    createdModel = model<T, TModel>(modelName, schema)
    //@ts-ignore
    global[modelName] = createdModel
  }
  //@ts-ignore
  createdModel = global[modelName]
  return createdModel
}
