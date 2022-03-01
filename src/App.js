import './App.css';
import TopSide from "./components/TopSide";
import PageAddImg from "./components/PageAddImg";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Gallery from "./components/Gallery";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [preview, setPreview] = useState()
    const [imgList, setImgList] = useState([])

    const getPreview = (preview) => {
        setPreview(preview)
    }
    const url = 'http://localhost:5000/imgList?_limit=30'

    useEffect(() => {
        axios.get(url)
            .then((res)=> {
                setImgList(res.data)
            })
    },[url])
    console.log(imgList)

  return (
      <BrowserRouter>
          <TopSide getPreview={getPreview}/>
          <Routes>
              <Route path='' element={<Gallery imgList={imgList}/>}/>
              <Route path='addImg' element={<PageAddImg preview={preview}/>}/>
          </Routes>

      </BrowserRouter>

  );
}

export default App;
