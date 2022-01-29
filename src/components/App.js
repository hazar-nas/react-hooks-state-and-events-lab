import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setAppClass] = useState(true)

  const handleClick = ()=>{
    setAppClass(!appClass)
  }
 

  return (
    <div onClick={handleClick} className={appClass ? "App light":"App dark"}>
      <header>
        <h2>Shopster</h2>
        <button>{appClass ? 'Light Mode':'Dark Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
