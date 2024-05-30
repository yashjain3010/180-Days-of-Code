import JWT from 'jsonwebtoken'
import { User } from '@prisma/client';
import { JWTUser } from '../interfaces';

const JWT_SECRET = "$$$skjdfslkdjs1323234...";

class JWTService{
    public static async generateTokenforUser(user : User){
        const payload : JWTUser = {
            id : user?.id,
            email : user?.email
        }
       
        const token = JWT.sign(payload,JWT_SECRET)
        return token;
    }

    public static decodeToken(token : string){
        try{
            return JWT.verify(token,JWT_SECRET) as JWTUser
        }
     
        catch(error){
            return null;
        }
    }
}

export default JWTService