import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const count =useSelector(state => state.count)
  return (
    <div>
      <h1>Count: {count}</h1>
  

  <div>

    <button onClick={() => dispatch({type:"INCREMENT"})}>INCREMENT</button>
    <button onClick={() => dispatch({type:"DECREMENT"})}>Decriment</button>
  </div>
    </div>
  );
}

export default App;
