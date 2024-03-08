import React, { useEffect, useState } from 'react'
import "./Signup.css"
// import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { signup } from '../../Redux/action'
import "bootstrap/dist/js/bootstrap.bundle.min";
import { post_sign } from '../../Redux/authAction';

function Signup() {

  const dispatch = useDispatch();
const navigate = useNavigate()

  const [valid, setValid] = useState(false)
  const [valid2, setValid2] = useState(false);
  const [valid3, setValid3] = useState(false);
    const [valid4, setValid4] = useState(false);
  
  const [bool1, setBool1] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [bool3, setBool3] = useState(false);
  const [bool4, setBool4] = useState(false);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    confirm:""
  })



  const { users, allData, isLoading, isError, failHints, token, loginSucc } =
    useSelector((state) => state.auth);


  useEffect(() => {
    // console.log(data);
    setShow3(true);
  }, [failHints]);
    // const { users, isLoading, isError,failHints } = useSelector((state) => {
    //     return state.auth;
    //   });

  const getName = () => {
    
    if (data.name==="" || valid===false) {
      return "invalid";
    }  else {
      return "valid"
    }

  }
  

  const handleName = (e) => {
    
    // console.log(e.target.value)
    let name = e.target.value;
 setData({ ...data, username: name });

    // if (name ==="") {
    //   setBool1(false)
    //   setValid(true)
    // }
    // else if (!/^[a-zA-Z]{3,}$/.test(name)) {
    //   setBool1(false);
    //    setValid(true);
      
    // } else {
    //   setBool1(true);
    //    setValid(false);
    //   setSign({ ...sign, username: name });
    // }
// console.log(data)

  }
  const handleEmail = (e) => {
    let tar = e.target.value;
  
    //   if (e.target.value  === "") {

    //        setBool2(false);
    //        setValid(true);
    //   } else if (!/^\S+@\S+\.\S+$/.test(e.target.value )) {
    //  setBool2(false);
    //  setValid(true);

    //   } else {
    //     setBool2(true);
    //     setValid(false);
        
    //     setData({ ...data, email: tar });

    // }
  
  }


  const handlePass =  (e) => {
    
// setData({...data,password:e.target.vaue})

  }

  const handleConfirm = (e) => {

    let repass = e.target.vaue
    if (data.password === repass) {
      // setBool2(false);
      setValid4(false);
      setData({...data,confirm:repass})
    } else {
      // setData({ ...data, confirm: "" });
      setValid4(true);
      
    }
    // console.log(data)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

if(data.username&& data.email && data.password && data.confirm ){
  
  if (data.password !== data.confirm) {
    setShow(true);
  } else {
   

    dispatch(post_sign(data))
    
    setData({
      username: "",
      password: "",
      email: "",
      confirm: "",
    });
      navigate("/");
    // if (!show3) {
    //   navigate("/");
    // }

    //  console.log(data);
  }

} else {
   setShow2(true);
}


}


 if (isLoading) {
   return (
     <div
       className="spinner-border  text-success lod-div"
       style={{ width: "5rem", height: "5rem" }}
       role="status"
     >
       <span className="visually-hidden">Loading...</span>
     </div>
   );
 } 
  


// const refreshToast = ()=>{
//     window.location.reload();
// }

// if(failHints){

//     return (<div className='toast-div'>

// <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
//       <div className="toast-body">
//          {failHints}
//         <div className="mt-2 pt-2 border-top">
         
//           <button type="button" className="btn btn-secondary btn-sm" onClick={refreshToast} data-bs-dismiss="toast">Close</button>
//         </div>
//       </div>
//     </div>
   

//     </div>)
// }

console.log(failHints);

  return (
    <div className="container-sm d-flex justify-content-center align-items-center signup-cont">
      {show && (
        <div className="toast-item toast-div-cont3">
          <div
            className="toast fade show toast-item-div"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-body">
              {"Wrong Password"}
              <div className="mt-2 pt-2 border-top">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setShow(false)}
                  data-bs-dismiss="toast"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {show2 && (
        <div className="toast-item toast-div-cont3">
          <div
            className="toast fade show toast-item-div"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-body">
              {"Please Fill All Fields"}
              <div className="mt-2 pt-2 border-top">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setShow2(false)}
                  data-bs-dismiss="toast"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {show3 && (
        <div className="toast-div2">
          <div
            className="toast fade show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-body">
              {failHints}
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
      )} */}

      <form
        // onSubmit={formik.handleSubmit}
        onSubmit={handleSubmit}
        className="my-5 p-3 d-flex flex-column justify-content-start rounded-2 form-cont"
      >
        <div className="mb-3 d-flex flex-column justify-content-start align-items-start">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            // value={formik.values.name}
            name="name"
            // onChange={formik.handleChange}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            className={`form-control ${getName()}`}
            id="exampleInputName2"
            aria-describedby="nameHelp"
          />

          {valid && (
            <span className="nameValid">
              Name Should be Minimum 3 characters or an Alphabets
            </span>
          )}
          {/* <span className="error-name">Name Should be an Alphabets</span> */}
        </div>

        <div className="mb-3 d-flex flex-column justify-content-start align-items-start">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            // name="email"
            // value={sign.email}
            // onChange={formik.handleChange}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="form-control"
            id="exampleInputEmailnew"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3 d-flex flex-column justify-content-start align-items-start">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            // value={formik.values.password}
            // onChange={formik.handleChange}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3 d-flex flex-column justify-content-start align-items-start">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm"
            // value={formik.values.confirm}
            // onChange={formik.handleChange}
            onChange={(e) => setData({ ...data, confirm: e.target.value })}
            className="form-control"
            id="exampleInputPassword2"
          />
          {valid4 && <span className="nameValid">Wrong Password</span>}
        </div>

        <div className="mb-3 d-flex align-items-start py-2 justify-content-start signup-text">
          <p className="m-0">Already have an account?</p>
          <p className="m-0">
            <Link
              className="text-warning fw-bold"
              style={{ textDecoration: "none", paddingLeft: "10px" }}
              to="/"
            >
              login
            </Link>
          </p>
        </div>

        <button
          type="submit"
          className="btn btn-info text-white fw-bold signup-btn"
        >
          Signup
        </button>

        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </form>
    </div>
  );
}

export default Signup