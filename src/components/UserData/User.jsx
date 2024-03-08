import React, { useEffect, useState } from "react";
import "./User.css";
import { post_user_data } from "../../Redux/userAction";
import { useDispatch, useSelector } from "react-redux";
import Log from "../Logout/Log";

function User() {
  const dispatch = useDispatch()
  
  let allD = JSON.parse(localStorage.getItem("login_data"));
  console.log(allD);
  const [val, setVal] = useState([allD]);
    console.log(val);
  const [data, setData] = useState({
    email: allD?.email || "",
    username: allD?.username || "",
    _id: allD?._id || "",
    age: allD?.age || "",
    gender: allD?.gender || "",
    dob: allD?.dob || "",
    mobile: allD?.mobile || "",
  });
  const [showToast, setShowToast] = useState(false)
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
      const [show4, setShow4] = useState(false);

const { isLoading, isError, isfail, isSuccess } = useSelector(
  (state) => state.user
  );
  
  const { users, allData } =
    useSelector((state) => state.auth);
  
    useEffect(() => {
 
      if (isSuccess) {
        setShow3(true);
      }

      getData();
    }, [isSuccess]);
  
  
    useEffect(() => {
      if (isfail) {
        setShow4(true);
      }

     getData()

    }, [isfail]);
  
  const getData = () => {
    let data = JSON.parse(localStorage.getItem("login_data"));
   setData(data);
 }

  const handleAdd = () => {
    console.log(data)
    if (data.age && data.gender && data.dob && data.mobile) {
      dispatch(post_user_data(data));
    } else {
      setShowToast(true)
    }

  }

if (isLoading) {
  return (
    <div
      className="spinner-border  text-success lod"
      style={{ width: "5rem", height: "5rem" }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}


  return (
    <div className="container user-cont">
      {showToast && (
        <div className="toast-item toast-div-cont">
          <div
            className="toast fade show toast-item-div"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-body">
              Mandatory To Fill All Fields
              <div className="mt-2 pt-2 border-top">
                <button
                  type="button"
                  className="btn-sm-btn"
                  onClick={() => setShowToast(false)} 
                  data-bs-dismiss="toast"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {show3 &&   (
       <div className="toast-item toast-div-cont3">
         <div
           className="toast fade show toast-item-div"
           role="alert"
           aria-live="assertive"
           aria-atomic="true"
         >
           <div className="toast-body">
             {isSuccess}
             <div className="mt-2 pt-2 border-top">
               <button
                 type="button"
                 className="btn btn-secondary btn-sm"
                 onClick={()=>setShow3(false)}
                 data-bs-dismiss="toast"
               >
                 Close
               </button>
             </div>
           </div>
         </div>
       </div>
      )}
      
      {show4 && (
        <div className="toast-item toast-div-cont4">
          <div
            className="toast fade show toast-item-div"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-body">
              {isfail}
              <div className="mt-2 pt-2 border-top">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={()=>setShow4(false)}
                  data-bs-dismiss="toast"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="main-user">
        <h3 className="user-data">USER DATA</h3>
 
        <div>
          <Log />
        </div>
        
        <div className="age-div">
          <label htmlFor="" className="age-label">
            Age
          </label>
          <input
            type="number"
            onChange={(e) => setData({ ...data, age: e.target.value })}
            className="age-ip"
            placeholder="ENTER YOUR AGE"
          />
        </div>

        <div className="gen-div">
          <label htmlFor="" className="gen-label">
            Gender
          </label>
          <select
            className="gen-ip"
            onClick={(e) => setData({ ...data, gender: e.target.value })}
          >
            <option value="" default>
              None
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Neutral">Trans</option>
          </select>
        </div>

        <div className="dob-div">
          <label htmlFor="" className="dob-label">
            DOB
          </label>
          <input
            type="date"
            onChange={(e) => setData({ ...data, dob: e.target.value })}
            className="dob-ip"
            placeholder="SELECT YOUR DOB"
          />
        </div>

        <div className="mob-div">
          <label htmlFor="" className="mob-label">
            Mobile
          </label>
          <input
            type="number"
            className="mob-ip"
            onChange={(e) => setData({ ...data, mobile: e.target.value })}
            placeholder="ENTER YOUR  MOBILE NUMBER"
            minLength={10}
          />
        </div>

        <button onClick={handleAdd} className="btn border-0">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default User;
