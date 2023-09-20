import Header from "./components/Header";
const App=()=> {
  const name ='Joselyne'
  return (
    <div className="container">
      <Header title ='Hey'/>
    <h1>Hello {name} from React</h1>
    </div>
  );
}

export default App;
