import Main from "./components/main";
import {Routes, Route} from 'react-router-dom';
import Game from "./components/game";

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/:name" element={<Game/>}/>
            </Routes>
        </div>
    );
}

export default App;