//import { useState } from "react";



const Form = (words) => {

    
    //const wl = words.words.words;

    //console.log(wl);

    return (
      <div>
         <h2>testing</h2>
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