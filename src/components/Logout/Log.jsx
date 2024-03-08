import React, { useEffect, useState } from 'react'
import "./Log.css"
import { useNavigate } from 'react-router-dom';

function Log() {
  const navigate = useNavigate()
  const [bool,setBool] = useState(false)

    const handleOut =  () => {
        localStorage.removeItem("token");
      localStorage.removeItem("login_data");

     setTimeout(() => {
       navigate("/");
       setBool(true)
          }, 100);

          
      setTimeout(() => {
            setBool(true);
            window.location.reload();
          }, 100);
      // window.location.reload();
      // navigate("/")
  }

 
if (bool) {
  return (
    <div
      className="spinner-border  text-success lod23"
      style={{ width: "5rem", height: "5rem" }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

  return (
      <div>
          <button onClick={handleOut} className='logout'>
              
              LOGOUT

          </button>
    </div>
  )
}

export default Log