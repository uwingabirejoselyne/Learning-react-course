import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Section from './components/Section';
import Card from './components/Card';
import Joke from './components/Joke';
import data from './utils/data.json'
import {useState} from 'react'



function App() {
  return (
    <div className='container'>
     <Nav/>
     <Section/>
       <div className="flex justify-between mx-12 gap-4 mt-5">
        {/* <Card className =""
           rating="5.0"
           reviewCount={6}
           country="USA"
           title="Life Lessons with Katie Zaferes"
           price={136}

        />
        <Card 
        rating="5.0"
        reviewCount={6}
        country="Rwanda"
        title="Life Lessons with Katie Joselyne"
        price={135}
        />
        <Card
       rating="5.0"
       reviewCount={7}
       country="Kenya"
       title="Life Lessons with Katie Uwingabires "
       price={134}
        /> */}
        {data.map((item)=>(
      <Card key={item.id} 
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
      />
      
      ))}
      </div>
      
      
    </div>
  );
}

export default App;
