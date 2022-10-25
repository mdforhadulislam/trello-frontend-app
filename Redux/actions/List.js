import { FETCH_ADD_ALL_LISTS } from "../type"

export const fetch_to_add_list = (payload)=>{
    return {
        type: FETCH_ADD_ALL_LISTS,
        payload
    }
}