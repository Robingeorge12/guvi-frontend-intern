import React, { useEffect, useState } from "react";
import "./Login.css";
import { useFormik } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { login } from '../../Redux/action';
import { useDispatch, useSelector } from "react-redux";
import { post_login } from "../../Redux/authAction";

function Login({ tokenVal, setTokenVal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);


  const { users, allData, isLoading, isError, failHints, token, loginSucc } =
    useSelector((state) => state.auth);

  const [data, setData] = useState({
    password: "",
    email: "",
  });


  useEffect(() => {
  
    if (failHints) {
       setShow4(true);
    }
  

 }, [failHints]);

  useEffect(() => {

    if (loginSucc) {
      navigate("/user")
    } else {
      navigate("/")
    }

  }, [loginSucc]);
  
  // console.log( users, isLoading,  loginSucc);
  console.log(failHints);

  // create one small toast that will show login successfully
  // let Per = JSON.parse(localStorage.getItem("user_data"));
 

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (value) => {
      // must use async await
      console.log(value);
      await dispatch(post_login(value));
      formik.resetForm();
      //  setLoginSuccess(true);
    },
  });

  const refreshToast = () => {
    window.location.reload();
  };



  return (
    <div className="container-sm d-flex justify-content-center align-items-center login-cont">
      {show3 && (
        <div className="toast-div2-login">
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
                  onClick={() => setShow3(false)}
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
        <div className="toast-div toast-div-cont5">
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

      <form
        onSubmit={formik.handleSubmit}
        className="my-5 p-3 d-flex flex-column justify-content-start rounded-2 form-login-cont"
      >
        <div className="mb-3 d-flex flex-column justify-content-start align-items-start">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="form-control"
            id="exampleInputEmail1"
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
            value={formik.values.password}
            onChange={formik.handleChange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3 d-flex align-items-start py-2 justify-content-start signup-text">
          <p className="m-0">Not have an account?</p>
          <p className="m-0">
            <Link
              className="text-info fw-bold"
              style={{ textDecoration: "none", paddingLeft: "10px" }}
              to="/sign"
            >
              signup
            </Link>
          </p>
        </div>

        <button
          type="submit"
          className="btn btn-info fw-bold text-white login-btn"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
