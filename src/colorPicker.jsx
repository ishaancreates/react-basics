import React,{useState} from "react";

function ColorPicker() {

    const [color, setColor] = useState("#2ac262ff")

    function handleColorChange(event){
        setColor(event.target.value)
    }
    return (
        <>
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-box" style={{background: color}}>
                <p>This is the Result box and the selected color is {color};</p>
            </div> <br />

            <label >Choose color form here  </label>
            <input type="color" value={color} onChange={handleColorChange}/>

        </div>
        </>
    )
}

export default ColorPicker

/**
 body{ 
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.color-picker-container {
    display: flex;
    flex-direction: column;
    align-items: center;

}
.color-box {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
     padding-left: 50px;
    border: 5px solid hsl(0, 0%, 0.8%);
    transition: 2ms ease;
}
.color-box p{
   margin-left: 1.5rem;
    font-size: 1rem;
}

label {
    font-weight: bold;
}

input[type ="color"] {
    width: 50px;
    height: 30px;
    border-radius: 5px;
    border-radius: 2px solid red;
}
 */