
/* react hook 
   useCase 
 */
import React, { useContext, useState } from "react"



function MyComponents() {
    const Me = "guest";
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const updateName = () => setName("Ishaan");
    const incAge = () => setAge(age + 2);



    return (
        <div> <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incAge}>Increment Age</button>
        </div>
    )
}

export default MyComponents