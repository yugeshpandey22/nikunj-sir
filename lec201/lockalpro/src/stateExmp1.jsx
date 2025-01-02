import { useState } from "react";

function StateExap1() {
    const [name, setName] = useState("rku");
    const [age, setAge] = useState(23);
    const [color, setColor] = useState("red");
    const [showName, setShowName] = useState(true);

    return (
        <div>

            <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                
            />
            <br />

            
            
            
            


            {showName && <p> Name of candidate is: {name}</p>}


            <input 
                type="number" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
            
            />
            <p style={{ backgroundColor: color, height: "50px", lineHeight: "50px" }}>
                Candidate's age is: {age}
            </p>


            <div>
                <label>
                    <input 
                        type="checkbox" 
                        onChange={() => setColor("blue")} 
                        checked={color === "blue"} 
                    /> 
                    Blue
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        onChange={() => setColor("red")} 
                        checked={color === "red"} 
                    /> 
                    Red
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        onChange={() => setColor("yellow")} 
                        checked={color === "yellow"} 
                    /> 
                    Yellow
                </label>
            </div>

            <p>Selected color: {color}</p>
        </div>
    );
}

export default StateExap1;
