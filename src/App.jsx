import Main from "./layout/Main";
import Home from "./view/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                </Route>    
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
