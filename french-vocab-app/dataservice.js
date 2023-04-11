const fs = require('fs');

let filename = 'C:\\Users\\jarre\\WebApps\\FrenchVocabApp\\french-vocab-app\\Fre.Freq.3.Hun.txt';
let wordList = [];
let dataArr = [];

function loadFile()
{
    fs.readFile(filename, (err, data) => {
        if(err) throw err;

        dataArr = data.toString().split("\n");
    });

    for(let i = 0; i < dataArr.length; i++){
            
        let line = dataArr[i].split("\t");

        wordList[i] = {
            word : line[0],
            blogFreq : line[1],
            newsFreq : line[10]
        }
   }

    return wordList;
}

loadFile();
