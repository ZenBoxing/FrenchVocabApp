import './App.css';
import VocabEstimator from './components/VocabEstimator';
import words from './dataservice';


const App = () => {

  return (
    <div className="App">
        <VocabEstimator wordlist={words}/>
    </div>
  );
}

export default App;
