import React, {useEffect, useState} from 'react';
import './PageEditImg.css'
import axios from "axios";
import {NavLink} from "react-router-dom";


const PageEditImg = ({preview, setFetch}) => {


    const [tag, setTeg] = useState([])

    const handleChangeTag = (e) => {
        setTeg(e.currentTarget.value.split(","))
    }
    /*const handleClickSave = (e) => {


       axios.post('http://localhost:5000/imgList', {
            urlPicture: preview,
            tag
        })
            .then(res => res.data)
            .then(res => {
                console.log(res)
            })
        setFetch()
    }*/



    return (
        <form className="container-add-img">
            <div>
                <p>Загрузить картинку</p>
                <div className="preview-img">
                    <img src={preview}/>
                </div>
            </div>

            <div className="block-btn-add-img">
                <p>Ключевые слова</p>
                <div className="input-tag">
                    <textarea value={tag} onChange={handleChangeTag}/>
                </div>
                <div className="btn-edit">
                    <div className="btn-del-img">
                        <NavLink to="/" >Удалить</NavLink>
                    </div><div className={!preview?"btn-save-img no-active": "btn-save-img"}>
                        <NavLink to="/" >Сохранить изменения</NavLink>
                    </div>
                </div>

            </div>

        </form>

    );
};

export default PageEditImg;