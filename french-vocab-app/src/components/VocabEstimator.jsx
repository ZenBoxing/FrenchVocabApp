import Title from './Title';
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