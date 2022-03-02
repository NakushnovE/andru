import React, {useEffect, useState} from 'react';
import "./Gallery.css"
import {NavLink} from "react-router-dom";
import axios from "axios";



const Gallery = ({searchByTag, pictures, setClickOpenEditImg, setPreviewFromEdit, setLimitPicture, limitPicture}) => {


    const [clickLoadMore, setClickLoadMore] = useState(false)

    const handleOpenEditImg = (picture) => {
        setClickOpenEditImg(picture)
        console.log(picture.urlPicture)
    }
    const handleLoadMore = () => {
        setLimitPicture(limitPicture += 30)
    }


    return (
        <div className="container-gallery">
            <div>{searchByTag? {searchByTag}: "Ключевое слово"}</div>
            <div className="block-img">
                {pictures.map(picture => (
                 <NavLink  key={picture.id} to="/editImg"><img onClick={()=>handleOpenEditImg(picture)} src={picture.urlPicture}/></NavLink>
                    )
                )}
            </div>
            <div className={pictures.length  < limitPicture?"btn-more-load hide":"btn-more-load"} onClick={()=> handleLoadMore()}>
                <button>Загрузить еще</button>
            </div>
        </div>

    );
};

export default Gallery;