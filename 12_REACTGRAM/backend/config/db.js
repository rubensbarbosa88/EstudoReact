import mongoose from 'mongoose'

const dbConnection = async () => {
  const user = process.env.DB_USER
  const pass = process.env.DB_PASS

  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${user}:${pass}@cluster0.fvmjuje.mongodb.net/?retryWrites=true&w=majority`
    )

    console.log('OK connectado!')
    return conn
  } catch(err) {
    console.error(err)
  }
}

export default dbConnection