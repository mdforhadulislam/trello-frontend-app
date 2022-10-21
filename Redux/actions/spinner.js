import { RUN_SPINNER, STOP_SPINNER } from "../type"

export const run_spinner =(payload)=> {
    return {type:RUN_SPINNER,payload}
}
export const stop_spinner =(payload)=> {
    return {type:STOP_SPINNER,payload}
}