import { ADD_AUTH_TOKEN, REMOVE_AUTH_TOKEN } from "../type"

export const add_token =(payload)=> {type:ADD_AUTH_TOKEN,payload}
export const remove_token =(payload)=> {type:REMOVE_AUTH_TOKEN,payload}