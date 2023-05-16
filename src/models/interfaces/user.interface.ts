export interface user extends auth {
    nombre: string,   
    role: string 

}

export interface auth {
    email: string,
    pass: string
}

