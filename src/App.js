
import Budget from "./component/Budget";
import Salary from "./component/Salary";
import History from "./component/History";
import Transaction from "./component/Transaction";
import { useState,useEffect } from "react";
function App() {
  const [historyVal,setHistoryVal]=useState(history);
  const [desc, setDesc] = useState("");
  const [val, setVal] = useState(0);

  const [isExpense, setIsExpense] = useState(true);

  
  const [totalIncome, setTotalIncome] = useState(0);

  const [totalExpense, setTotalExpense] = useState(0);


  const deleteHistory=(id)=>{
    const newList=historyVal.filter(entry=> entry.id!==id)
setHistoryVal(newList);
  }
     const addTransaction=(desc="Empty",val=0)=>{
const newList=historyVal.concat({id:historyVal.length+1,desc:desc,cost:val,color:
  isExpense===true? "red":"green"})
setHistoryVal(newList);    
setDesc("");
setVal(0);
setIsExpense(false)
} 
const editTransaction=(id,desc,val,color)=>{
  
  const index=historyVal.findIndex((entry)=>entry.id===id)  

 const newEntries=[...historyVal]
 newEntries[index].desc=desc;
 newEntries[index].cost=val;
 newEntries[index].color=color;
 setHistoryVal(newEntries);  
 setDesc("");
 setVal(0);
} 

useEffect(() => {
  let totalIncome=0;
  let totalExpense=0;
  historyVal.map((entry)=>{
if(entry.color==="green")return totalIncome+=entry.cost;
return totalExpense+=entry.cost;


  })
  setTotalIncome(totalIncome);
  setTotalExpense(totalExpense)
}, [historyVal])

  return (
    <div >
         <Budget budget={totalIncome-totalExpense} />
         <Salary totalExpense={totalExpense} totalIncome={totalIncome} />
         {historyVal.map(history=>{
           return <History 
           key={history.id}
           id={history.id}
           cost={history.cost}
           desc={history.desc}
           onDelete={deleteHistory}
            oneEdit={editTransaction}
            color={history.color} />
         })}
         <Transaction 
         isExpense={isExpense} setIsExpense={setIsExpense}
         addTransaction={addTransaction} 
         val={val} setVal={setVal}
         desc={desc} setDesc={setDesc}
         showAction={true}/>
        
    </div>
  );
}

export default App;

var history=[{
  id:1,desc:"Salary",cost:100000,color:"green"
},{
  id:2,desc:"Water Bill",cost:2000,color:"red"
},{
  id:3, desc:"Rent",cost:25000,color:"red"
},{
  id:4,desc:"Cafe income",cost:10000,color:"green"
}]
