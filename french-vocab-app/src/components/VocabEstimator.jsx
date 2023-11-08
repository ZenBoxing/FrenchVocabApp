import Title from './Title';
// import Button from './Button';
import Form from './Form';


const VocabEstimator = (words) => {
    
    return (
        <div className="VocabEstimatorForm">
            <Title/>
            <Form words={words}/>
        </div>
      );
}

export default VocabEstimator;