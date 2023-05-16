import { JwtPayload, sign, verify } from "jsonwebtoken"
const secret_jwt = process.env.jwt_secret || "secreto de respaldo"
const jwtGenerator = async (payload:any)=>{
    const token = sign(payload, secret_jwt, {expiresIn: '1h'})
    return token
}

const jwtVerify = async (token:any)=>{
    const tokenOk = verify(token, secret_jwt)
    return <JwtPayload>tokenOk
}

export {jwtGenerator, jwtVerify}