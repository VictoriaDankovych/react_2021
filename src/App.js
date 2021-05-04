import logo from './logo.svg';
import './App.css';
import CharacterComponent from "./components/characterComponent";
// import CharacterComponent from "./components/characterComponent";
function App() {
  return (
    <div >
     <CharacterComponent description={'bart'}
                         image={'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'}/>
     <CharacterComponent description={'liza'}
                         image={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>

    </div>
  );
}

export default App;
