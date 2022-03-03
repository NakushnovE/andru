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
    const [clickOpenEditImg, setClickOpenEditImg] = useState()
    const [previewFromEdit, setPreviewFromEdit] = useState()
    const [limitPicture, setLimitPicture] = useState(30)

    const getPreview = (preview) => {
        setPreview(preview)
    }

    const url = `http://localhost:5000/imgList?_limit=${limitPicture}`

    const [{pictures, isLoading}, setFetch] = useFetch(url)

    useEffect(() => {
        setFetch()
        console.log(pictures)
    },[setFetch, url, pictures.length])


    const [selectedFile, setSelectedFile] = useState()


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

  return (
      <BrowserRouter>
          <div className="app-container">
              <TopSide onSelectFile={onSelectFile}/>
              <Routes>
                  <Route path='' element={<Gallery limitPicture={limitPicture} setLimitPicture={setLimitPicture} setFetch={setFetch} pictures={pictures} setClickOpenEditImg={setClickOpenEditImg} setPreviewFromEdit={setPreviewFromEdit}/>}/>
                  <Route path='addImg' element={<PageAddImg preview={preview} setFetch={setFetch}/>}/>
                  {clickOpenEditImg?<Route path='editImg' element={<PageEditImg clickOpenEditImg={clickOpenEditImg}/>}/>: null}
              </Routes>
          </div>


      </BrowserRouter>

  );
}

export default App;
