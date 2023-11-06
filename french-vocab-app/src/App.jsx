import './App.css';
import VocabEstimator from './components/VocabEstimator';
import raw from  './data/Fre.Freq.3.Hun.txt';
import { useState } from 'react';
 
let wordList = [];

if (typeof window !== 'undefined') { 

  fetch(raw)
    .then(response => response.text()) 
    .then(textString => {
        
        let dataArr = textString.split("\n");
        let list = [];

        for(let i = 1; i < 15; i++){
            
          let line = dataArr[i].split("\t");
  
          list[i] = {
              word : line[0],
              blogFreq : line[1],
              newsFreq : line[10]
          }

         wordList = list;
     }
    });
}

const App = () => {
  
  const [words] = useState(wordList);

  return (
    <div className="App">
        <VocabEstimator words={words}/>
    </div>
  );
}

export default App;
