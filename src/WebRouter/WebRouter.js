import { Route, Routes } from "react-router";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Contact from "../Contact/Contact";

export default function WebRouter(){
    return (
        <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/Products" element= {<Products/>} />
            <Route path="/Contact" element = {<Contact />} />
        </Routes>
    )
}