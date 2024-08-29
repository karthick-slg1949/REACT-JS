//action types

let GM='GM'
let GA='GA'
let GE='GE'
let GN='GN'

//redux action
let gmaction=()=>{
     return{type:GM}
}
let gaaction=()=>{
    return{type:GA}
}
let geaction=()=>{
    return{type:GE}
}
let gnaction=()=>{
    return{type:GN}
}

export {gmaction,gaaction,geaction,gnaction,GM,GA,GE,GN}