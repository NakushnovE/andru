import React, {useEffect, useState} from 'react';
import './PageEditImg.css'
import axios from "axios";
import {NavLink} from "react-router-dom";


const PageEditImg = ({setFetch, clickOpenEditImg}) => {


    const [tag, setTeg] = useState(clickOpenEditImg.tag)



    const handleChangeTag = (e) => {
        setTeg(e.currentTarget.value.split(","))
    }

    const deleteImg = (id) => {
        axios.delete(`http://localhost:5000/imgList/${id}`)
        setFetch()
    }
    const editImg = (id) => {
        axios.put(`http://localhost:5000/imgList/${id}`, {
            urlPicture: clickOpenEditImg.urlPicture,
            tag
        })
        setFetch()
    }


    return (
        <form className="container-edit-img">
            <div>
                <p>Загрузить картинку</p>
                <div className="preview-img">
                    <img src={clickOpenEditImg.urlPicture}/>
                </div>
            </div>

            <div className="block-btn-edit-img">
                <p>Ключевые слова</p>
                <div className="input-tag">
                    <textarea value={tag} onChange={handleChangeTag}/>
                </div>
                <div className="btn-edit">
                    <div className="btn-del-img">
                        <NavLink to="/"  onClick={()=>deleteImg(clickOpenEditImg.id)}>Удалить</NavLink>
                    </div><div className="btn-edit-img">
                        <NavLink to="/" onClick={()=>editImg(clickOpenEditImg.id)}>Сохранить изменения</NavLink>
                    </div>
                </div>

            </div>

        </form>

    );
};

export default PageEditImg;