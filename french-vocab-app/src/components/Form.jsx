import { useEffect, useState } from "react";
import raw from  './componentdata/Fre.Freq.3.Hun.txt';


const Form = () => {

     const [words, setWords] = useState([]);

     const [checkedList, setCheckedList] = useState([]);

     const [result, setResult] = useState();

     useEffect(() => { 
      onGenerateForm(); 
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

     const onGenerateForm = () => {

          setCheckedList([]);

          fetch(raw)
            .then(response => response.text()) 
            .then(textString => {
        
            let dataArray = textString.split("\n");
            
            setList(dataArray, setWords);
      
        });

        uncheckAll();
        let label = document.querySelector('.result-label');
        label.style.visibility = 'hidden';

     }

     const setList = (array, setter) => {
      
        let list = [];
        
        const mins = [0, 3001,12001,20001,30001,35001,40001];
        const maxs = [3000, 12001,20000,30000,35000,40000,45000];

        for(let i = 1, c = 1, p = 0; i < 71; i++, c++){
              
          if(c === 11){
            p++;
            c = 1;
          }

          let num = Math.floor(getRandomArbitrary(mins[p], maxs[p]));
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
      let label = document.querySelector('.result-label');

      setResult(s);
      label.style.visibility = 'visible';
      
      
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
         <h1 className="title">Mesurez votre vocabulaire français</h1>
         <br></br>
         <p className="description">Découvrez combien de mots que vous connaissez en complétant le formulaire ci-dessous. <br/>
         Cochez la case si vous êtes sûr de connaître la définition du mot, sinon laissez-la vide.  <br/>
         Les mots sont classés approximativement par la fréquence d’utilisation générale. <br/>
         Une fois que vous avez terminé, cliquez sur le bouton Soumettre et voyez vos résultats.</p>
         
         <div className="button-container">
         <button className="form-button" onClick={onGenerateForm}>Rafraîchir</button>
         <br></br>
         <button className="form-button" onClick={onCompleteForm}>Soumettre</button>
         <br></br>
         <label className="result-label" >{result} Mots</label>
         </div>
         <div className="checkbox-background">
         {words.map((word, index) => {
            return(
              <div key={index} className="checkbox-container">
                <input
                  className="cb"
                  type="checkbox"
                  value={word.rank}
                  onChange={handleSelect}
                />
                <label className="box-label">{word.word}</label>
              </div>
            )
         })}

        </div>

      </div>
    );

}

export default Form;