import CustomErrorHandler from '../services/CustomErrorHandler'
import JwtService from '../services/JwtService'

const auth = async (req, res, next) => {
  let authHeader = req.headers.authorization
  if (!authHeader) {
    return next(CustomErrorHandler.unAuthorized('No Token in here'))
  }
  const token = authHeader.split(' ')[1]

  try {
    const { _id, name, email, role } = JwtService.verify(token)

    const user = {
      _id,
      name,
      email,
      role
    }
    req.user = user
    next()
  } catch (error) {
    return next(CustomErrorHandler.unAuthorized('something Went Wrong'))
  }
}

export default auth
