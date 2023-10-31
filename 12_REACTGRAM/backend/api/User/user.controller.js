import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "./user.model.js";

export const generateToken = (id) => {
  const secret = process.env.JWT_SECRET

  return jwt.sign({ id }, secret, {
    expiresIn: '7d'
  })
}

export const register = async (req, res) => {
  const { name, email, password } = req.body

  const user = await User.findOne({ email })

  if (user) {
    res.status(422).json({ errors: ['Usuário ja existe, utilize outro email.']})
    return
  }

  const salt = await bcrypt.genSalt()
  const passHash = await bcrypt.hash(password, salt)

  const newUser = await User.create({ name, email, password: passHash})

  if (!newUser) {
    res.status(422).json({ errors: 'Usuário não foi criado corretamente, por favor tente mais tarde.' })
    return
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id)
  })
}