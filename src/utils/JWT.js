import jwt from 'jsonwebtoken';
import { JWT_KEY } from '@/config/settings'

const JWT = {
  generate: (payload, secretKey = JWT_KEY, expiresIn = '10s') => {
    return jwt.sign(payload, secretKey, { expiresIn });
  },
  verify: (token, secretKey = JWT_KEY) => {
    try {
      return jwt.verify(token, secretKey);
    } catch (error) {
      return false;
    }
  }
}

export default JWT;