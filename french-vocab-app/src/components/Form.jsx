import { useState } from "react";
import raw from  './componentdata/Fre.Freq.3.Hun.txt';


const Form = () => {

     const [words, setWords] = useState([]);
     const [checkedList, setCheckedList] = useState([]);

     const onGenerateForm = () => {

          fetch(raw)
            .then(response => response.text()) 
            .then(textString => {
        
            let dataArr = textString.split("\n");
            let list = [];

            //array length of five for now
            for(let i = 1; i < 70; i++){
              

              let num = Math.floor(getRandomArbitrary(0, 3000));
              let line = dataArr[num].split("\t");
      
              list[i] = {
                  word : line[0],
                  blogFreq : line[1],
                  newsFreq : line[10]
              }
        }        
          setWords(list);      
        });
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
         {words.map((word, index) => {
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
    // const [checkedState, setCheckedState] = useState(
    //   new Array(wl.length).fill(false)
    // );

    // const handleOnChange = (position) => {
    //   const updatedCheckedState = checkedState.map((item, index) =>
    //     index === position  ? !item : item
    //   );

    //   setCheckedState(updatedCheckedState);
    // }

    // return(
    //   <div classname="vocab-form">
    //     <ul className="word-list">
    //     {wl.map(({ word }, index) => {
    //       return (
    //         <li key={index}>
    //           <div className="word-list-item">
    //             <div className="left-section">
    //               <input
    //                 type="checkbox"
    //                 id={`custom-checkbox-${index}`}
    //                 name={word}
    //                 value={word}
    //                 checked={checkedState[index]}
    //                 onChange={() => handleOnChange(index)}
    //               />
    //               <label htmlFor={`custom-checkbox-${index}`}>{word}</label>
    //             </div>
    //            </div>
    //         </li>
    //       );
    //     })}
    //   </ul>
    //   </div>
    // );

}

export default Form;