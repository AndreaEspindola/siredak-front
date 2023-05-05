import Main from "./layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    {/* <Route index element={}/> */}
                </Route>    
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
