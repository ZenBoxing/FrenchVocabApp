
const List = (words) => {

    const listItems = words.words.words.map(word => <li>{word.word}</li>);
    return <ul>{listItems}</ul>;
}

export default List;