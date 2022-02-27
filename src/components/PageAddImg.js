import React, {useEffect, useState} from 'react';
import './PageAddImg.css'


const PageAddImg = ({preview}) => {


    const [tag, setTeg] = useState("")

    const handleChangeTag = (e) => {
        setTeg(e.currentTarget.value)
    }
    const handleClickSave = (e) => {
        e.preventDefault();

        //зафечить
    }

    return (
        <div className="container-add-img">
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
                <div className="btn-save-img">
                    <button onClick={handleClickSave}>Опубликовать</button>
                </div>
            </div>

        </div>

    );
};

export default PageAddImg;