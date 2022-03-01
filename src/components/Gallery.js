import React, {useState} from 'react';
import "./Gallery.css"



const Gallery = ({searchByTag,imgList}) => {

    console.log(imgList)

    if(imgList.length < 30) {
        const el = document.getElementsByClassName('btn-more-load')
        el.className = 'hide'
        console.log(imgList.length)
    }
    
    return (
        <div className="container-gallery">
            <div>{searchByTag}</div>
            <div className="block-img">
                {imgList.map(picture => (
                    <img src={picture.url}/>
                    )
                )}
            </div>
            <div className={imgList.length  < 30?"btn-more-load hide":"btn-more-load"}>
                <button>Загрузить еще</button>
            </div>
        </div>

    );
};

export default Gallery;