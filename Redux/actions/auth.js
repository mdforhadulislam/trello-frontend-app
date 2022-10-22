import { ADD_AUTH_TOKEN, REMOVE_AUTH_TOKEN } from "../type"

export const add_token =(payload)=> {
    return {type:ADD_AUTH_TOKEN,payload}
}
export const remove_token =(payload)=> {
    return {type:REMOVE_AUTH_TOKEN,payload}
}