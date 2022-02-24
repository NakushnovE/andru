import React, { useState } from 'react';


const TopSide = () => {

    const [personInput, setPersonInput] = useState("")
console.log(personInput)

const handelOpenFormAddImg = () => {

}

    return (
        <div className="top-side">
            <div className="search-img">
                <input value={personInput} onChange={(e)=>(setPersonInput(e.currentTarget.value))}></input>
            </div>
            <div className="btn-add-img">
                <button onClick={handelOpenFormAddImg}>Add</button>
            </div>

        </div>
    )
}

export default TopSide;