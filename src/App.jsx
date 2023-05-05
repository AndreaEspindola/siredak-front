import Main from "./layout/Main";
import Home from "./view/Home";
import Access from "./view/Access";
import Rectification from "./view/Rectification";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route path="access" element={<Access/>}/>
                    <Route path="rectification" element={<Rectification/>}/>
                </Route>    
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
