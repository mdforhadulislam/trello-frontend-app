import { FETCH_ADD_ALL_BOARD } from "../type"

export const fetch_to_add_board = (payload) =>{
    return {
        type :FETCH_ADD_ALL_BOARD,
        payload
    }
}