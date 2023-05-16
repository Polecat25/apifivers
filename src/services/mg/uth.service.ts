
import { auth, user } from '../../models/interfaces/user.interface';
import UserMOdel from "../../models/mg/users.model";
import { DesencriptarPass, EncriptarPass } from '../../utilities/bcrypt.handler';
import { jwtGenerator } from '../../utilities/jwt.handler';
import { GoodEmail, GoodPass } from '../../utilities/validators';



const newUser = async (data:user)=>{
    //validar data
    const {nombre, email, pass, role} = data
    if (!nombre.trim() || !email.trim() || !pass.trim() || !role.trim()) {
        throw new Error('data empty');
    }
    
    if (!GoodEmail(email.trim())) {
        throw new Error("Correo invalido");        
    } 

    if (!GoodPass(pass.trim())) {
        throw new Error('la contraseña debe tener minimo 8 caracteres, 1 Mayúscula, 1 minúscula, caracter especial ');
    } 
    
    

    //validar correo existente
    const isnew = await UserMOdel.findOne({email:email.trim()}) //si es null no hay correo
    if (isnew) {
        return {code:400, message:"Usuario o Correo ya Existe"};
    }
    const passhas = await EncriptarPass(pass.trim())
    const res = await UserMOdel.create({email:email.trim(), nombre: nombre.trim(), pass: passhas, role:role.trim()})
    return {code:200, nameusr: res.nombre, message: "Usuario Creado con éxito"};
}
const loginUser = async (data:auth)=>{
    const errorObjeto = {message:"Correo o contraseña incorrecta", code:400}
    //encontrar el usurio
    const isuser = await UserMOdel.findOne({email:data.email.trim()}) //devuelve null o el objeto user
    //console.log("datos isuser:", isuser);
    if (!isuser) { 
        return {code:400, login: errorObjeto}; 
    }
    //validar contraseña 
    const passHash = isuser.pass
    const matchPass = await DesencriptarPass(passHash, data.pass) //devuleve true o false
    if (!matchPass) { 
        return {code:400, login: errorObjeto}; 
    }
       
    //## JWT <<<<------

    const {_id, email, nombre, role} = isuser 
    const jwt = await jwtGenerator({_id,email, role})
    return {code:200, login: {_id, email, nombre, role, jwt}};
 
}

export {newUser, loginUser}