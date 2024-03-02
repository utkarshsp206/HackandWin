import dotenv from 'dotenv'

dotenv.config();

export const {
    PORT,
    DB_URI,
    JWT_SECRET,
    DEBUG_MODE,
    SALT

} = process.env