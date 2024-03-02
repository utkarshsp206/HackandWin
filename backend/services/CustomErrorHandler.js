class CustomErrorHandler extends Error {
  constructor (status, msg) {
    super();
    this.status = status
    this.message = msg
  }

  static alreadyExists (message) {
    return new CustomErrorHandler(409, message)
  }
  static notExists (message) {
    return new CustomErrorHandler(410, message)
  }
  static wrongPassword (message) {
    return new CustomErrorHandler(411, message)
  }
  static unAuthorized (message = 'unAuthorised') {
    return new CustomErrorHandler(401, message)
  }
  static notFound (message = '404 Not Found') {
    return new CustomErrorHandler(401, message)
  }
  static serverError (message = 'Internal Server Error') {
    return new CustomErrorHandler(500, message)
  }
  
}

export default CustomErrorHandler
