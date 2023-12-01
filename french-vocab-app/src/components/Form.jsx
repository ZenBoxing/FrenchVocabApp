import { useState } from "react";
import raw from  './componentdata/Fre.Freq.3.Hun.txt';


const Form = () => {

     const [levelOne, setLevelOne] = useState([]);
     const [levelTwo, setLevelTwo] = useState([]);
     const [levelThree, setLevelThree] = useState([]);
     const [levelFour, setLevelFour] = useState([]);
     const [levelFive, setLevelFive] = useState([]);
     const [levelSix, setLevelSix] = useState([]);
     const [levelSeven, setLevelSeven] = useState([]);

     const [checkedList, setCheckedList] = useState([]);

     const onGenerateForm = () => {

          fetch(raw)
            .then(response => response.text()) 
            .then(textString => {
        
            let dataArray = textString.split("\n");
            
            setList(dataArray, 0, 3000, setLevelOne);
            setList(dataArray, 3000, 12000, setLevelTwo);
            setList(dataArray, 12000, 20000, setLevelThree);
            setList(dataArray, 20000, 30000, setLevelFour);
            setList(dataArray, 30000, 35000, setLevelFive);
            setList(dataArray, 35000, 40000, setLevelSix);
            setList(dataArray, 40000, 45000, setLevelSeven);
                  
            
        });
     }

     const setList = (array, min, max, setter) => {
      
        let list = [];
       
        for(let i = 1; i < 11; i++){
              

          let num = Math.floor(getRandomArbitrary(min, max));
          let line = array[num].split("\t");
  
          list[i] = {
              word : line[0],
              blogFreq : line[1],
              newsFreq : line[10]
          }
       }  
              
      setter(list);      
     }

     const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
     }

     const onCompleteForm = () => {
        console.log("Selected: ");
        console.log(checkedList);
     }

     const handleSelect = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;
    
        if (isChecked) {
          //Add checked item into checkList
          setCheckedList([...checkedList, value]);
        } else {
          //Remove unchecked item from checkList
          const filteredList = checkedList.filter((item) => item !== value);
          setCheckedList(filteredList);
    }
  };


    return (
      <div>
         <h2>form</h2>
         <button onClick={onGenerateForm}>Generate Form</button>
         <button onClick={onCompleteForm}>Submit</button>
         {levelOne.map((word, index) => {
            return(
              <div key={word.word} className="checkbox-container">
                <label>{word.word}</label>
                <input
                  type="checkbox"
                  value={word.word}
                  onChange={handleSelect}
                />
              </div>
            )
         })}
      </div>
    );

}

export default Form;