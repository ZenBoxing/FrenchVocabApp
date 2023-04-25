

const Button = () =>{

    function handleClick(){
        alert("Pressed");
    }

    return(
        <button onClick={handleClick}>Press Me</button>
    );
}



export default Button;