
/* react hook 
   useCase 
 */
import React, { useContext, useState } from "react"



function MyComponents() {
    const Me = "guest";
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => setName("Ishaan");
    const incAge = () => setAge(age + 2);
    const toggleEmployedStatus = () => setIsEmployed(!isEmployed);



    return (
        <div> <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incAge}>Increment Age</button>

            <p>Employement: {isEmployed ? "Yes" : "No" }</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>

        </div>
    )
}

export default MyComponents