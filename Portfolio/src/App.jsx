import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Games from "./pages/Games";
import Survey from "./pages/Survey";
import Workspace from "./pages/Workspace";
import MyFooter from "./components/MyFooter";

const App =() =>{
    return(
        <Router>
            <MyHeader />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/games" element={<Games />}/>
                <Route path="/survey" element={<Survey />}/>
                <Route path="/workspace" element={<Workspace />}/>
            </Routes>
            <MyFooter />
        </Router>
    );
};

export default App;