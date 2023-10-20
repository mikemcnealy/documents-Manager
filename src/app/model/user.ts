export interface User{
    id :number
    name:string
    password:string,
    accountStatusID:number,
    LastLogIn:Date,
    roleID:number,
    Lock?:number
}
