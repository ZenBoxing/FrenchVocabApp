import Results from './Results';

const Button = () =>{

    function handleClick(){
        alert("Pressed");
    }

    return(
        <div>
            <button onClick={handleClick}>Press Me</button>
            <Results result={result}/>
        </div>
    );
}



export default Button;