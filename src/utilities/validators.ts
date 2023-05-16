const isEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const isPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

const GoodPass = (pass:string)=>{    
    return isPass.test(pass)
}

const GoodEmail = (email:string)=>{    
    return isEmail.test(email)
}

export {GoodEmail, GoodPass}