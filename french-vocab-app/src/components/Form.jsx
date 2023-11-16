import { useState } from "react";



const Form = (words) => {

    const wl = words.words.words;
    


    return(
       <form >
        <label> {wl[1].word} <input type="checkbox" name="1"/> </label>
        <label> {wl[2].word} <input type="checkbox" name="2"/> </label>
        <label> {wl[3].word} <input type="checkbox" name="3"/> </label>
        <label> {wl[4].word} <input type="checkbox" name="4"/> </label>
        <label> {wl[5].word} <input type="checkbox" name="5"/> </label>
        <label> {wl[6].word} <input type="checkbox" name="6"/> </label>
        <label> {wl[7].word} <input type="checkbox" name="7"/> </label>
        <label> {wl[8].word} <input type="checkbox" name="8"/> </label>
        <label> {wl[9].word} <input type="checkbox" name="9"/> </label>
        <label> {wl[10].word} <input type="checkbox" name="10"/> </label>
        <hr/>
        <button type="submit">Submit Form</button>
        
       </form>
    );

}

export default Form;