import './App.css';
import TopSide from "./components/TopSide";
import PageAddImg from "./components/PageAddImg";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Gallery from "./components/Gallery";
import {useState} from "react";

function App() {

    const [preview, setPreview] = useState()
    const getPreview = (preview) => {
        setPreview(preview)
    }

  return (
      <BrowserRouter>
          <TopSide getPreview={getPreview}/>
          <Routes>
              <Route path='' element={<Gallery />}/>
              <Route path='addImg' element={<PageAddImg preview={preview}/>}/>
          </Routes>

      </BrowserRouter>

  );
}

export default App;
