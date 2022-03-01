import './App.css';
import TopSide from "./components/TopSide";
import PageAddImg from "./components/PageAddImg";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Gallery from "./components/Gallery";
import {useEffect, useState} from "react";

import useFetch from "./hooks/useFetch";
import PageEditImg from "./components/PageEditImg";

function App() {

    const [preview, setPreview] = useState()
    const [clickOpenEditImg, setClickOpenEditImg] = useState(false)
    const [previewFromEdit, setPreviewFromEdit] = useState()

    const getPreview = (preview) => {
        setPreview(preview)
    }
    let limitPicture = 30
    const url = `http://localhost:5000/imgList?_limit=${limitPicture}`

    const [{pictures, isLoading}, setFetch] = useFetch(url)

    useEffect(() => {
        setFetch()
        console.log(pictures)
    },[setFetch, url, pictures.length])


  return (
      <BrowserRouter>
          <TopSide getPreview={getPreview}/>
          <Routes>
              <Route path='' element={<Gallery pictures={pictures} setClickOpenEditImg={setClickOpenEditImg} setPreviewFromEdit={setPreviewFromEdit}/>}/>
              <Route path='addImg' element={<PageAddImg preview={preview} setFetch={setFetch}/>}/>
              {clickOpenEditImg?<Route path='editImg' element={<PageEditImg />}/>: null}
          </Routes>

      </BrowserRouter>

  );
}

export default App;
