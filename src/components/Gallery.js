import React, {useState} from 'react';
import "./Gallery.css"



const Gallery = ({searchByTag}) => {

    
    return (
        <div className="container-gallery">
            <div>{searchByTag}</div>
            <div className="block-img">
            </div>
            <div className="btn-more-load">
                <button>Загрузить еще</button>
            </div>
        </div>

    );
};

export default Gallery;