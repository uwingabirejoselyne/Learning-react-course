import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
const App=()=> {
  const[tasks,setTasks] =useState(
    [
      {
          id:1,
          name:'Joselyne',
          Position: 'IT'
      },
      {
          id:2,
          name:'Uwingabire',
          Position: 'Developer'
      }
  ]
  )
  const name ='Joselyne'
  return (
    <div className="container">
      <Header title = {1}/>
      <Tasks tasks={tasks}/>
    <h1 className=" text-blue-500 p-4">Hello {name} from React</h1>
    </div>
  );
}

export default App;
