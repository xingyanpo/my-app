import { SignJWT, jwtVerify } from 'jose';
import { JWT_KEY } from '@/config/settings';

const JWT = {
  generate: async (payload, secretKey = JWT_KEY, expiresIn = '1d') => {
    const secret = new TextEncoder().encode(secretKey);
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt() 
      .setExpirationTime(expiresIn)
      .sign(secret);
  },
  verify: async (token, secretKey = JWT_KEY) => {
    const secret = new TextEncoder().encode(secretKey);
    try {
      return await jwtVerify(token, secret);
    } catch (error) {
      return false;
    }
  }
}

export default JWT;