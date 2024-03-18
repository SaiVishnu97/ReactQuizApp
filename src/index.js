import { render } from "react-dom";
import "./App.css"
import HomePage from "./components/HomePage"
import {  useState,createContext } from "react";
import Result from "./components/Result"
// import { BrowserRouter,Route,Routes } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { CloseButton } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

import QuestionArea from "./components/QuestionArea";
export const myBox=createContext()

function App()
{
    const [questionIndex,setQuestionIndex] = useState(0)
    const [answers,setanswers]=useState([]);
    const [markedreview,setmarkedreview]=useState([]);
    const [page,setpage]=useState("Home")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
        <div>

        <myBox.Provider value={{setpage,setQuestionIndex, QuestionIndex:questionIndex,answers,setanswers,markedreview,setmarkedreview}}>
        {/* <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<HomePage/>}
                />
                <Route
                    exact
                    path="/QuestionArea"
                    element={<QuestionArea />}
                />
                <Route exact path="/Result" element={<Result/>}></Route>
            </Routes>
        </BrowserRouter> */}
        {page==="Home"&&<HomePage/>}
        {page==="Questions"&&<QuestionArea/>}
        {page==="Result"&&<Result></Result>}
        </myBox.Provider>
      
   </div>
    )
}

render(<App/>,document.querySelector("#root"))
