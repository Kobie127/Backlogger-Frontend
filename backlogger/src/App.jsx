import React, {useState} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/common/Header";

const App = () => {
  const [isSignedIn, setSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header isSignedIn={isSignedIn}/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
