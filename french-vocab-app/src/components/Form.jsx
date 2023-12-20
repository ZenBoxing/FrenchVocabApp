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

     const [result, setResult] = useState();

     const onGenerateForm = () => {

          setCheckedList([]);

          fetch(raw)
            .then(response => response.text()) 
            .then(textString => {
        
            let dataArray = textString.split("\n");
            
            setList(dataArray, 0, 3000, setLevelOne);
            setList(dataArray, 3001, 12000, setLevelTwo);
            setList(dataArray, 12001, 20000, setLevelThree);
            setList(dataArray, 20001, 30000, setLevelFour);
            setList(dataArray, 30001, 35000, setLevelFive);
            setList(dataArray, 35001, 40000, setLevelSix);
            setList(dataArray, 40001, 45000, setLevelSeven);
                  
            
        });

        uncheckAll();
     }

     const setList = (array, min, max, setter) => {
      
        let list = [];
       
        for(let i = 1; i < 11; i++){
              

          let num = Math.floor(getRandomArbitrary(min, max));
          let line = array[num].split("\t");
          
          
          list[i] = {
              word : line[0],
              rank : num
          }

       }  
              
      setter(list);      
     }

     const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
     }

     const onCompleteForm = () => {

      let b1 = 0;
      let b2 = 0;
      let b3 = 0;
      let b4 = 0;
      let b5 = 0;
      let b6 = 0;
      let b7 = 0;
      
      for(let i = 0; i < checkedList.length; i++){
        if(checkedList[i] >= 0 && checkedList[i] <= 3000){
          b1++;
        }else if(checkedList[i] >= 3001 && checkedList[i] <= 12000){
          b2++;
        }else if(checkedList[i] >= 12001 && checkedList[i] <= 20000){
          b3++;
        }else if(checkedList[i] >= 20001 && checkedList[i] <= 30000){
          b4++;
        }else if(checkedList[i] >= 30001 && checkedList[i] <= 35000){
          b5++;
        }else if(checkedList[i] >= 35001 && checkedList[i] <= 40000){
          b6++;
        }else if(checkedList[i] >= 40001 && checkedList[i] <= 45000){
          b7++;
        }

      }

      let s = ((b1 + b2 + b3 + b4)* 150) + ((b5 + b6 + b7) * 600);
      
      setResult(s);
      
     }

     const uncheckAll = () => {

       let checkboxes = document.querySelectorAll('.cb');
      
       console.log(checkboxes);

       for(let i = 0; i < checkboxes.length; i++){
          checkboxes[i].checked = false;
       }

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
         <label>{result} Words</label>
         <br></br>
         <button onClick={onGenerateForm}>Generate Form</button>
         <button onClick={onCompleteForm}>Submit</button>
         <div className="checkbox-background">
         {levelOne.map((word, index) => {
            return(
              <div key={index} className="checkbox-container">
                <label>{word.word}</label>
                <input
                  className="cb"
                  type="checkbox"
                  value={word.rank}
                  onChange={handleSelect}
                />
              </div>
            )
         })}

         {levelTwo.map((word, index) => {
            return(
              <div key={index} className="checkbox-container">
                <label>{word.word}</label>
                <input
                  className="cb"
                  type="checkbox"
                  value={word.rank}
                  onChange={handleSelect}
                />
              </div>
            )
         })}

         {levelThree.map((word, index) => {
            return(
              <div key={index} className="checkbox-container">
                <label>{word.word}</label>
                <input
                  className="cb"
                  type="checkbox"
                  value={word.rank}
                  onChange={handleSelect}
                />
              </div>
            )
         })}

         {levelFour.map((word, index) => {
            return(
              <div key={index}  className="checkbox-container">
                <label>{word.word}</label>
                <input
                  className="cb"
                  type="checkbox"
                  value={word.rank}
                  onChange={handleSelect}
                />
              </div>
            )
         })}

         {levelFive.map((word, index) => {
            return(
              <div key={index} className="checkbox-container">
                <label>{word.word}</label>
                <input
                  className="cb"
                  type="checkbox"
                  value={word.rank}
                  onChange={handleSelect}
                />
              </div>
            )
         })}

         {levelSix.map((word, index) => {
            return(
              <div key={index} className="checkbox-container">
                <label>{word.word}</label>
                <input
                  className="cb"
                  type="checkbox"
                  value={word.rank}
                  onChange={handleSelect}
                />
              </div>
            )
         })}

         {levelSeven.map((word, index) => {
            return(
              <div key={index} className="checkbox-container">
                <label>{word.word}</label>
                <input
                  className="cb"
                  type="checkbox"
                  value={word.rank}
                  onChange={handleSelect}
                />
              </div>
            )
         })}
          </div>

      </div>
    );

}

export default Form;