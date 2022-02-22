
import Budget from "./component/Budget";
import Salary from "./component/Salary";
import History from "./component/History";
import Transaction from "./component/Transaction";
function App() {
  return (
    <div >
         <Budget/>
         <Salary/>
         <History title="Samsung Galaxy M21" cost="$500" color="red" />
         <History title="Iphone 12 max" cost="$1000"  color="green"/>
         <History title="Realme narzo 5g" cost="$400"  color="red"/> 
    <Transaction/>
    </div>
  );
}

export default App;
