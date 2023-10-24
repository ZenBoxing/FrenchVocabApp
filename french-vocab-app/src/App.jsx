import './App.css';
import VocabEstimator from './components/VocabEstimator';
import raw from  './data/Fre.Freq.3.Hun.txt'


const App = () => {

  let words;

   fetch(raw)
    .then(r => r.text())
    .then(text => {
       //console.log('text decoded:', text);
      
       const dataArr = text.split("\n");
       const wordList = [];

       for(let i = 0; i < 15; i++){
            
        let line = dataArr[i].split("\t");

        wordList[i] = {
            word : line[0],
            blogFreq : line[1],
            newsFreq : line[10]
        }        
    }

    for(let i = 0; i < wordList.length; i++){
      console.log(wordList[i].word);
    }

    words = wordList;

 });

  return (
    <div className="App">
        <VocabEstimator wordlist={words}/>
    </div>
  );
}

export default App;
