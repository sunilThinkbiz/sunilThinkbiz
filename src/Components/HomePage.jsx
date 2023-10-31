import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Cards from './Cards';
import AddMovie from "../Page/AddMovie";
export default function HomePage() {
  return (
    <> 
    <BrowserRouter> 
    <NavBar />
    <Routes> 
      <Route exact path="/" element={<Cards/>}/> 
      <Route exact path="/add-movie" element={<AddMovie/>}/> 
    </Routes> 
    </BrowserRouter> 
    </>
  );
}

