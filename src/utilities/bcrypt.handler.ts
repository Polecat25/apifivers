import { hash, compare, genSalt } from "bcryptjs";

 
//SE HACEN DOS FUNCIONES UNA PARA ENCRIPTAR Y OTRA PARA DESENCRIPTAR LA PSS

const EncriptarPass = async (pass:any)=>{
    const salt = await genSalt(10)
    const passTohash = await hash(pass, salt)
    return passTohash
}

const DesencriptarPass = async (hashPass:any, NOhashPass:any )=>{
        const thehashtopass = await compare(NOhashPass, hashPass)
        return thehashtopass
}

export {EncriptarPass, DesencriptarPass}