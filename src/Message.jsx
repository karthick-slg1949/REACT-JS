import Msg from './Msg'
let Message=()=>{
    let GM="good morning"
    return <div>
        <h1>Message Component</h1>
        <Msg Wish={GM}/>

    </div>
}
export default Message