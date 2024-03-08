import React from 'react'
import "./Log.css"
import { useNavigate } from 'react-router-dom';

function Log() {
    const navigate = useNavigate()
    const handleOut = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("login_data");

        navigate("/")


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