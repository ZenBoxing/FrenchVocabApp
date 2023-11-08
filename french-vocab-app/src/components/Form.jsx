
const List = (words) => {

    const wl = words.words.words;
    
    // const listItems = words.words.words.map(word => <li>{word.word}</li>);
    // return <ul>{listItems}</ul>;
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
    
        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
      }

    return(
       <form action={handleSubmit}>
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

export default List;