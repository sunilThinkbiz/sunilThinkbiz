import React from 'react';
import { FaHome, FaSort } from 'react-icons/fa';
import { IoIosAddCircleOutline } from 'react-icons/io';
import {useNavigate} from "react-router-dom"
const NavBar = () => {
  const navigate = useNavigate(); 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ width: '100%' }}>
      <div className="d-flex align-items-center" style={{ flexGrow: 1 }}>
      <button style={{ width: "60px", marginRight: "10px", }}
          className="btn btn-outline-light btn-sm ml-2"onClick={()=>navigate('/')}> <FaHome /> Movie</button>
        <button
          style={{ width: "60px", marginRight: "10px", }}
          className="btn btn-outline-light btn-sm ml-2"
          onClick={()=>navigate("/add-movie")}
        >
          Add<IoIosAddCircleOutline />
        </button>
        <div>
        <button style={{ width: "60px" }} className="btn btn-outline-light btn-sm ml-2">
          Sort<FaSort />
        </button>
      </div>
      </div>

      <div className="d-flex @" style={{marginRight:"5px", }}>
        <form className="form-inline">
          <div className="input-group" style={{width:"400px"}}>
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              
            />
            <div className="input-group-append">
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      
    </nav>
  );
};

export default NavBar;
