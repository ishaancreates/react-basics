import React,{useState} from "react";

function OnChange(){
    const [name, setName] = useState("Rohit");
    const [quantity, setQuantity] = useState("Virgin");
    const [desc, setDesc] = useState("")
    const [type, setType] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }
    const handledescChange = (event) => {
        setDesc(event.target.value)
    }
    const handlTypeChange = (event) => {
        setType(event.target.value)
    }
    return(
        <div>
            <input value= {name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value= {quantity} onChange={handleQuantityChange} type="number"/>
            <p>Body Count: {quantity}</p>

            
            <textarea value={desc} onChange={handledescChange} placeholder="Tell us about your bed life"></textarea>
            <p>
                This is you telling us about your sex life: <br /> 
                {desc}
            </p>

            <select value={type} onChange={handlTypeChange}> 
                <option value="">Select your type</option>
                <option value="Thic baddie">Thic baddie</option>
                <option value="Thic goth baddie">Thic goth baddie</option>
                <option value="Mommy">Mommy</option>
                <option value="MILF">MILF</option>
                <option value="BIG TTs">BIG TTs</option>
                <option value="BIG A**">BIG A**</option>
                <option value="skinny but cute">skinny but cute</option>
                <option value="bas zinda honi chaiye ">bas zinda honi chaiye</option>

            </select>
            <p>You type is {type}</p>
            

            // label use krna bhi dekh lena mera likhne ka man ni kr Rha 

        </div>
    )

}
export default OnChange