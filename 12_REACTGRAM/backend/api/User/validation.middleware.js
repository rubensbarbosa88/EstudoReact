import { validationResult, body } from 'express-validator'


export const validRules = [
  body('name')
    .isString()
    .withMessage('O nome é obrigatório')
    .isLength({ min: 3 })
    .withMessage('O nome precisa ter pelo menos 3 caractéres'),
  body('email')
    .isString()
    .withMessage('O email é obrigatório')
    .isEmail()
    .withMessage('insira um email válido'),
  body('password')
    .isString()
    .withMessage('A senha é obrigatória')
    .isLength({ min: 5})
    .withMessage('A senha precisa ter pelo menos 5 caractéres'),
  body('confirmPassword')
    .isString()
    .withMessage('A confirmação de senha é obrigatória')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('As senhas precisam ser iguais')
      }

      return true
    })

]

export const validate = (req, res, next) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return next()
  }

  const messages = errors.array().map(i => i.msg)

  return res.status(422).json({
    errors: messages
  })
}
