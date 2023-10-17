import * as fs from 'fs';


let filename = 'C:\\Users\\jarre\\WebApps\\FrenchVocabApp\\french-vocab-app\\Fre.Freq.3.Hun.txt';
let wordList = [];
let dataArr = [];

const words = loadFile();

function loadFile()
{
    fs.readFile(filename, (err, data) => {
        if(err) throw err;

        dataArr = data.toString().split("\n");
    });

    //change iteration length back to dataArr.length
    for(let i = 0; i < 15; i++){
            
        let line = dataArr[i].split("\t");

        wordList[i] = {
            word : line[0],
            blogFreq : line[1],
            newsFreq : line[10]
        }
   }

    return wordList;
}

export {words};
