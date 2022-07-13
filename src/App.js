import './App.css';
import Top from "./Components/Top/Top";
import NavBar from "./Components/NavBar/NavBar";
import RenderReact from "./ReactRoutes/Routes";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Top />
            <NavBar />
            <RenderReact />
        </BrowserRouter>
    </div>
  );
}

export default App;
