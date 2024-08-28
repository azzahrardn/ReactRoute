import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

const User = (props) => {
  const { name, role } = props;
  return (
    <div>
      <h1>My Name is {name}</h1>
      <h1>I'm part of {role}</h1>
    </div>
  );
};

function App() {
  const [name] = useState('Azzahra Rahmadani');
  const [role] = useState('Hacker Front End 8');

  return (
    <div className="App">
      <div>
        <h1 className="title">React Component</h1>
        <User name={name} role={role}/>
        <Counter initialCount={0} />
      </div>
    </div>
  );
}

export default App;
