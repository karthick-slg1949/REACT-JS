import CompB from './CompB'

let CompA=()=>{
    
        let eid=101;
         let ename="karthick";
    
    

    return <div>
        <h1>Component-A</h1><hr />
        <CompB emp_Id={eid} Ename={ename}/>
    </div>
}
export default CompA