import './App.css';
import VocabEstimator from './components/VocabEstimator';
import raw from  './data/Fre.Freq.3.Hun.txt'
import { useEffect, useState } from 'react';


const App = () => {

  const  [words, setWords] = useState([]);
  
  const fetchData = () => {
    fetch(raw)
    .then(response => response.text()) 
    .then(textString => {
        
        let dataArr = textString.split("\t");
        let list = [];

        for(let i = 0; i < 15; i++){
            
          let line = dataArr[i].split("\t");
  
          list[i] = {
              word : line[0],
              blogFreq : line[1],
              newsFreq : line[10]
          }

         setWords(list);
      }
    });
  }

  useEffect(() => {
    fetchData();
  },[])

  console.log(words);
  
  return (
    <div className="App">
        <VocabEstimator/>
    </div>
  );
}

export default App;
