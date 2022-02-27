import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import "./TopSide.css"

const TopSide = ({getPreview}) => {

    const [personInput, setPersonInput] = useState("")
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e) => {
        setSelectedFile(e.target.files[0])
    }
    const triggerClick = (e) => {
        const el = document.getElementById('input_file')
        el.click()
    }

    getPreview(preview)
    return (
        <div className="top-side">
            <div className="upper-block">
                <div>Pic<span>loader</span></div>
                <div className="btn-load-img">
                    <div className="input-img">
                        <input type="file" id="input_file" onChange={onSelectFile}></input>
                    </div>
                    <NavLink to="/addImg" onClick={(event)=>triggerClick()}>Загрузить</NavLink>
                </div>
            </div>

            <div className="search-img">
                <input value={personInput} placeholder="Поиск" onChange={(e)=>(setPersonInput(e.currentTarget.value))}></input>
            </div>
        </div>
    )
}

export default TopSide;