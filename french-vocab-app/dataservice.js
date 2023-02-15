const exceljs = require('exceljs');

const workbook = new exceljs.Workbook();
let filename = 'C:\\Users\\jarre\\WebApps\\FrenchVocabApp\\french-vocab-app\\Lexique383.xlsb';

async function loadFile()
{
    await workbook.xlsx.readFile(filename);
    
}

loadFile();
