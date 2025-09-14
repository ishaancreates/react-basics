import React, { useState } from "react";

function Musibat() {
    const [problem, setProblem] = useState(["Roz Class jaana", "Skills issue", "Chutiya college milgya"]);

    function handleAddProblem() {
        const newProblem = document.getElementById("inputProblems").value
         if (!newProblem.trim()) return; // Prevent empty entries
        setProblem(problem => ([...problem, newProblem]))
        document.getElementById("inputProblems").value = "";

       
    }
      function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleAddProblem();
        }
    }
    function handleRemoveProblem(index) {
        setProblem(problem.filter((_,i) => i !== index))
    }

    return (<>
        <p><h1>List of Problems</h1></p>
        <ul>
            {problem.map((problem, index) =>
                <li key={index} onClick={() => handleRemoveProblem(index)}>{problem} </li>
            )}
        </ul>
        <input type="text" placeholder="Apni samasya likhe" 
        id="inputProblems"  onKeyDown={handleKeyPress} />
        <button onClick={handleAddProblem}>Add problems</button>
    </>)


}

export default Musibat;