import * as mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  age: {
    required: true,
    type: Number
  }
})

const Model = mongoose.model('Data', dataSchema)
export { Model };
