import Title from './Title';
import Button from './Button';
import List from './List';


const VocabEstimator = (wordlist) => {
    return (
        <div className="VocabEstimatorForm">
            <Title/>
            <Button/>
            <List wordlist={wordlist}/>
        </div>
      );
}

export default VocabEstimator;