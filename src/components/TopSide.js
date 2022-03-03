import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import "./TopSide.css"


const TopSide = ({onSelectFile}) => {

    const [personInput, setPersonInput] = useState("")

    const triggerClickLoad = (e) => {
        const el = document.getElementById('input_file')
        el.click()
    }

    return (
        <div className="top-side">
            <div className="upper-block">
                <div>Pic<span>loader</span></div>
                <div className="btn-load-img">
                    <div className="input-img">
                        <input type="file" id="input_file" onChange={(e)=> onSelectFile(e)}></input>
                    </div>
                    <NavLink to="/addImg" onClick={(event)=>triggerClickLoad()}>Загрузить</NavLink>
                </div>
            </div>

            <div className="search-img">
                <input value={personInput} placeholder="Поиск" onChange={(e)=>(setPersonInput(e.currentTarget.value))}></input>
            </div>
        </div>
    )
}

export default TopSide;