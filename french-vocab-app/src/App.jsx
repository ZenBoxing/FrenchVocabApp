import './App.css';
import VocabEstimator from './components/VocabEstimator';
import raw from  './data/Fre.Freq.3.Hun.txt'


const App = () => {


   fetch(raw)
    .then(r => r.text())
    .then(text => {
       console.log('text decoded:', text);
     });

  return (
    <div className="App">
        <VocabEstimator/>
    </div>
  );
}

export default App;
