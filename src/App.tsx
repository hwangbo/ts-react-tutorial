import React from 'react';
import './App.css';
import Greetings from "./Greetings";

function App() {
    const onClick = (name: string) => {
        console.log(`${name} says hello`);
    };
    return (
        <div className="App">
            <Greetings name="작은곰" onClick={onClick}/>
        </div>
    );
}

export default App;
