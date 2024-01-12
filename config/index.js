import dotenv from 'dotenv'

dotenv.config()

export const {PORT,DB_URL,STRIPE_KEY,CLOUD_NAME,CLOUDINARY_KEY,CLOUDINARY_SECRET,JWT_KEY,NODE_ENV,REFRESH_JWT_KEY} = process.env