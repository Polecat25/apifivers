import {  Response } from 'express';

const handlerError = (res: Response,  code:number, mensaje?:any, rawError?:any)=>{
    res.status(code);
    res.send({
        message: mensaje,
        code: code,
        error: rawError
    })

}
 
export default handlerError