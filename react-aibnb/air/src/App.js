import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Section from './components/Section';
import Card from './components/Card';
import Joke from './components/Joke';


const jokeData =[
  {
    setup: "I got my daughter a fridge for her birthday.",
    punchline: "I can't wait to see her face light up when she opens it."
},
{
    setup: "How did the hacker escape the police?",
    punchline: "He just ransomware!"
},
{
    setup: "Why don't pirates travel on mountain roads?",
    punchline: "Scurvy."
},
{
    setup: "Why do bees stay in the hive in the winter?",
    punchline: "Swarm."
},
{
    setup: "What's the best thing about Switzerland?",
    punchline: "I don't know, but the flag is a big plus!"
}
]

function App() {
  
  return (
    <div>
     <Nav/>
     <Section/>
       <div className="grid grid-cols-3 gap-2">
        <Card
           rating="5.0"
           reviewCount={6}
           country="USA"
           title="Life Lessons with Katie Zaferes"
           price={136}

        />
        <Card 
        rating="5.0"
        reviewCount={6}
        country="RWanda"
        title="Life Lessons with Katie Joselyne"
        price={135}
        />
        <Card
       rating="5.0"
       reviewCount={7}
       country="Kenya"
       title="Life Lessons with Katie Uwingabires "
       price={134}
        />
      </div>
      {jokeData.map((item)=>(
      <Joke key={item.id} 
      setup= {item.setup}
      punchline ={item.punchline}
      />
      ))}
      
    </div>
  );
}

export default App;
