import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/component/Home";
import "./index.css";

function App() {
    return (
        <div className="bg-[#050505] text-white min-h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;