import Results from './Results';

const Button = () =>{

    const result = "5000";

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