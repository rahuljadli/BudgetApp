
import Budget from "./component/Budget";
import Salary from "./component/Salary";
import History from "./component/History";
import Transaction from "./component/Transaction";
import { useState } from "react";
function App() {
  const [historyVal,setHistoryVal]=useState(history);
  
  const deleteHistory=(id)=>{
    const newList=historyVal.filter(entry=> entry.id!==id)
setHistoryVal(newList);
  }
     const addTransaction=(desc="Empty",val="$0")=>{
const newList=historyVal.concat({id:historyVal.length+1,title:desc,cost:val,color:"red"})
setHistoryVal(newList);     
} 
const editTransaction=(id,desc,val,color)=>{
  
  const index=historyVal.findIndex((entry)=>entry.id==id)  
  console.log("Editable ID",desc)
 const newEntries=[...historyVal]
 newEntries[index].title=desc;
 newEntries[index].cost=val;
 newEntries[index].color=color;
 setHistoryVal(newEntries);  
 
 console.log("New",newEntries)
} 
  return (
    <div >
         <Budget/>
         <Salary/>
         {historyVal.map(history=>{
           return <History title={history.title} 
           key={history.id}
           id={history.id}
           cost={history.cost}
           onDelete={deleteHistory}
            oneEdit={editTransaction}
            color={history.color} />
         })}
         <Transaction addTransaction={addTransaction} showAction={true}/>
        
    </div>
  );
}

export default App;

var history=[{
  id:1,title:"Salary",cost:"$5000",color:"green"
},{
  id:2,title:"Water Bill",cost:"$100",color:"red"
},{
  id:3, title:"Rent",cost:"$1000",color:"red"
},{
  id:4,title:"Cafe income",cost:"$1200",color:"green"
}]
