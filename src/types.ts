import { Request, Response } from "express"

export interface User{
    userName:string
    password:string
}
export interface Errors{
    message:string
}
export interface RequestAuthType extends Request{
    userName?:string
}
export interface paginationType{
    page:number,
    limit:number
}
export interface ResultsType{
    previous?:paginationType,
    next?:paginationType,
    results?:string[]
}
export interface ResponseType extends Response{
    pagination?:{results:ResultsType,fileSize:number}
}