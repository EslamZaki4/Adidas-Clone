import "./login.css";

import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, database, provider } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import validator from "validator";
import { collection, getDocs } from "firebase/firestore";


export default function Login() {
  const navigate = useNavigate();
  const [fname, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({
    ema: "",
    passwor: ""

  });

  const onLogin = async (e) => {



    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        navigate("/")
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(" هناك خطا فى البريد لالكترونى او كلمة السر  ")

        console.log(errorCode, errorMessage)
      });
    const res = await getDocs(collection(database, "users"));

    const userNam = res.docs.forEach((doc) => {

      if (doc.data().email == email) {

        const fname = doc.data().firstname;
        const phoneNum = doc.data().phone;
        localStorage.setItem("name", fname);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phoneNum);
        return doc.data()
      }



    })
  }

  const handelEmail = (e) => {
    setEmail(e.target.value)
    if (!validator.isEmail(email)) {
      setMessage({ ema: "يرجى إدخال عنوان بريد إلكتروني صالح. . " });
    } else {
      setMessage({ ema: "" });
    }

  }
  const handelpassword = (e) => {
    setPassword(e.target.value)

    let passWordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$/

    if (!passWordRegex.test(password)) {
      setMessage({ passwor: "من فضلك أدخل رقمك السري. الرجاء استخدام الأحرف اللاتينية فقط. " });
      setMessage({ passwor: "" });
    } else {
      setMessage({ passwor: "" });
    }

    
  }
  const sinBYGoogel = () => {
    signInWithPopup(auth, provider).then((res) => {

      localStorage.setItem("name", (res.user.displayName))
      localStorage.setItem("email", (res.user.email))
      navigate("/")
      window.location.reload()

    }).catch((err) => {
      console.log(err);
    })


  }
  return (
    <>
      {/* <button onClick={getuser}>get</button> */}
      <div className="adidas-login">
        <nav className=" row justify-content-end mx-4 login-logo">
          <img
            style={{ width: "100px", height: "50px" }}
            src="https://i.pinimg.com/originals/e3/f4/6d/e3f46d6b1f2ddde857caaa388f50ad5f.png"
          />
        </nav>
        <hr />
        <div className=" d-flex justify-content-center continer">
          <div
            className="offset-1-1 text-end  flex-column adidas-login-text "
            style={{ width: "50%" }}
          >
            <div style={{ width: "70%" }}>
              <h3 style={{ fontWeight: "bolder", marginBottom: "30px" }}>
                فات اليوم ADICLUB انضم الى
              </h3>

              <p>
                سوف تحصل على مكافآتك من خلال ما تحب القيام به adiClub كعضو فى
                فريق قم بالتسجيل الآن واحصل على وصول فوري إلى مزايا المستوى
                الأول
              </p>
              <p>
                {" "}
                قسيمة شرائية بخصم 20% على عملية شرائك القادمة
                <i className="fa-solid fa-check mx-2"></i>
              </p>
              <p>
                الوصول إلى منتجات وتخفيضات خاصة بالأعضاء فقط
                <i className="fa-solid fa-check mx-2"></i>
              </p>
              <p>
                {" "}
                الوصول إلى تطبيقات أديداس للجري والتدريب
                <i className="fa-solid fa-check mx-2"></i>
              </p>

              <p>
                {" "}
                العروض الخاصة والعروض الترويجية
                <i className="fa-solid fa-check mx-2"></i>
              </p>

              <p>
                انضم الآن وابدأ بكسب النقاط وانتقل لمستويات جديدة واحصل على
                المزيد من المكافآت والفوائد adiClub. من
              </p>

              <div>
                {" "}
                <button
                  className="login_buttne position-relative  m-4 "
                  style={{ width: "40%", height: "50px" }}
                >
                  <a
                    className="text-light text-decoration-none"
                    href="/Register"
                  >
                    سجل الان{" "}
                  </a>
                  <img
                    className=" arrow-login position-absolute "
                    src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-white.svg"
                  ></img>
                </button>{" "}
              </div>

              <img
                style={{ width: "60%" }}
                src="https://eu.idp.adidas.com/assets/images/adidas/universal-login/adiclub.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" offset-1-1 text-end  adidas-login-form ">
            <div className="login-logo-small-siez ">
              {" "}
              <img
                style={{ width: "100px", height: "50px" }}
                src="https://i.pinimg.com/originals/e3/f4/6d/e3f46d6b1f2ddde857caaa388f50ad5f.png"
              />
            </div>

            <div className="col-12  cild-lodin-form">
              <h2>سجّل الدخول</h2>


              <form onSubmit={onLogin} action="">
                <label className="mt-4" htmlFor="#">

                  <i
                    className="fa-solid fa-star "
                    style={{
                      color: "red",
                      fontSize: "7px",
                      marginBottom: "5px",
                    }}
                  ></i>
                  البريد الالكترونى
                </label>
                <div>
                  <input
                    style={{ width: "90%", height: "50px" }}
                    type="email"
                    value={email}
                    onChange={(e) => { handelEmail(e) }}

                  />
                  <p style={{ color: "red" }}> {message.ema} </p>

                </div>


                <label className="mt-4" htmlFor="#">

                  <i
                    className="fa-solid fa-star "
                    style={{

                      color: "red",
                      fontSize: "7px",
                      marginBottom: "5px",
                    }}
                  ></i>
                  كلمة السرّ
                </label>
                <div>
                  <input
                    style={{ width: "90%", height: "50px" }}
                    className="w-90"
                    type="password"

                    value={password}
                    onChange={(e) => { handelpassword(e) }}
                  />
                  <p style={{ color: "red" }}> {message.passwor} </p>

                </div>
                <div className="row mt-4">
                  <di className="col-10" >
                    أبقني مسجل الدخول.
                    <a href="#">مزيد من المعلومات</a>
                  </di>
                  <div className="col-1 form-check">
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        border: "1px solid black",
                        height: "25px",
                        width: "25px",
                      }}
                    />
                  </div>
                  <div className=" m-3">
                    <button
                      type="submit"
                      className="login_buttne position-relative  "
                      style={{
                        width: "60%",
                        height: "50px",
                        marginRight: "110px",
                      }}
                    >
                      <span className="  mx-3"> تسجيل الدخول</span>

                      <img
                        className=" arrow-login position-absolute "
                        src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-white.svg"
                      ></img>
                    </button>
                  </div>
                </div>
              </form>
              <div>
                <button className=" google-login position-relative mt-5" onClick={sinBYGoogel}>


                  <span className="  mx-3">Google</span>

                  <img
                    className=" position-absolute "
                    src="data:image/png;base64,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"
                  ></img>
                </button>



                <button className=" google-login position-relative mx-5">
                  <span className="  mx-3">Feacbook</span>

                  <img
                    className="  position-absolute "
                    src="data:image/png;base64,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"
                  ></img>
                </button>
              </div>
              {/* <p style={{ fontSize: "13px", margin: "10px" }}>
                لقد قرات هذه الشروط{" "}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
