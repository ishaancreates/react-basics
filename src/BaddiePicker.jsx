import React, { useState } from "react";
import './BaddiePicker.css';

function Baddie() {
    const [baddie, setBaddie] = useState({
        height: "5'4",
        aesthetic: "Goth Aesthetic",
        nakhre: "Bohot jyada"
    })
    
    function handleHeightChange(event) {
        setBaddie(b => ({...b, height: event.target.value}))
    }

    function handleAestheticChange(event) {
        setBaddie(b => ({...b, aesthetic: event.target.value}))
    }

    function handleNakhreChange(event) {
        setBaddie(b => ({...b, nakhre: event.target.value}))
    }

    return(
        <div className="baddie-container">
            <h1>Baddie Picker 💅</h1>
            
            <div className="baddie-form">
                <div className="form-group">
                    <label>Height:</label>
                    <input 
                        type="text" 
                        value={baddie.height} 
                        onChange={handleHeightChange}
                    />
                </div>

                <div className="form-group">
                    <label>Aesthetic:</label>
                    <input 
                        type="text" 
                        value={baddie.aesthetic} 
                        onChange={handleAestheticChange}
                    />
                </div>

                <div className="form-group">
                    <label>Nakhre:</label>
                    <input 
                        type="text" 
                        value={baddie.nakhre} 
                        onChange={handleNakhreChange}
                    />
                </div>
            </div>

            <div className="baddie-display">
                <h2>Your Baddie Stats:</h2>
                <p><strong>Height:</strong> {baddie.height}</p>
                <p><strong>Aesthetic:</strong> {baddie.aesthetic}</p>
                <p><strong>Nakhre:</strong> {baddie.nakhre}</p>
            </div>
        </div>
    )
}

export default Baddie;