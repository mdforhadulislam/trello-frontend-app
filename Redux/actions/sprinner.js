import { SPRINNER_RUN, SPRINNER_STOP } from "../type"

export const run_sprinner=(payload)=>{type:SPRINNER_RUN,payload}
export const stop_sprinner=(payload)=>{type:SPRINNER_STOP,payload}