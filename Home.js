import * as React from 'react';
import {useState} from 'react';

function Home() {
   const [name, setName] = useState('Mario');
   const[age, setAge] = useState('26');
  function handleClick() {
     setName('Luigi');
     setAge(30)
  }

  return (
    <div className="home">
      <h2> Home Page </h2>
      <p>  {name} is {age}  old</p>
      <button onClick={handleClick}> Click Me </button>
   
    </div>
  );
}
export default Home;
