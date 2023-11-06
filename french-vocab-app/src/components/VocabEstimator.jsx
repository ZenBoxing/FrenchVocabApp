import Title from './Title';
// import Button from './Button';
import List from './List';


const VocabEstimator = (words) => {
    
    return (
        <div className="VocabEstimatorForm">
            <Title/>
            <List words={words}/>
        </div>
      );
}

export default VocabEstimator;