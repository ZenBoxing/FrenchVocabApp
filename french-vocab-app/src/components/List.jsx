
const List = (wordlist) => {

    const words = wordlist;

    //const listItems = words.map(word => <li>{word.word}</li>);

    //return <ul>{listItems}</ul>
    return <p>{words[0].word}</p>
}

export default List;