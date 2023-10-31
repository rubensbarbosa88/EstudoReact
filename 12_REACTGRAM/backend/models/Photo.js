import { Schema, model, ObjectId } from "mongoose";

const photoSchema = new Schema({
  image: String,
  title: String,
  likes: Array,
  comments: Array,
  userName: String,
  userId: ObjectId,
}, { timestamps: true })

const Photo = model('Photo', photoSchema)

export default Photo