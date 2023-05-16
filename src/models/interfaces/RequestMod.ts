import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';
export interface RequestMod extends Request{
    datauser?: JwtPayload | {_id:string, email:string}
}