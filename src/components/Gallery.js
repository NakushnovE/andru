import React, {useEffect, useState} from 'react';
import "./Gallery.css"
import {NavLink} from "react-router-dom";
import {logDOM} from "@testing-library/react";



const Gallery = ({searchByTag, pictures, setClickOpenEditImg, setPreviewFromEdit}) => {

    console.log(pictures)

    const handleOpenEditImg = (picture) => {
        setClickOpenEditImg(picture)
        console.log(picture.urlPicture)
    }

    if(pictures.length < 30) {
        const el = document.getElementsByClassName('btn-more-load')
        el.className = 'hide'
        console.log(pictures.length)
    }
    useEffect(() => {

    }, [pictures.length])
    
    return (
        <div className="container-gallery">
            <div>{searchByTag}</div>
            <div className="block-img">
                {pictures.map(picture => (
                 <NavLink  key={picture.id} to="/editImg"><img onClick={()=>handleOpenEditImg(picture)} src={picture.urlPicture}/></NavLink>
                    )
                )}
            </div>
            <div className={pictures.length  < 30?"btn-more-load hide":"btn-more-load"}>
                <button>Загрузить еще</button>
            </div>
        </div>

    );
};

export default Gallery;