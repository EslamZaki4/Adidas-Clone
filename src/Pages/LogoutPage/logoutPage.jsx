import React, { useEffect, useState } from "react";
import "./logout.css";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import OnlineLoading from "../../Components/OnlineLoading/OnlineLoading";

export const LogoutPage = () => {
  const [value, setvalue] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState('');


  useEffect(() => {
    const welcom = localStorage.getItem("name");
    const userEmail = localStorage.getItem("email")
    const userPhon = localStorage.getItem("phone")

    setPhone(userPhon)
    setUser(welcom)
    setEmail(userEmail)

  }, [])

  const onlougOut = () => {

    signOut(auth)
      .then(() => {
        navigate('/')
        localStorage.clear();
        window.location.reload()

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>


      <h1 className="text-end inform_bord">لوحة المعلومات</h1>

      <div className=" m-2 custom-breadcrumb  d-flex justify-content-end">
        <ol className="breadcrumb" role="navigation" aria-label="Breadcrumb">
          <li className="breadcrumb-item">
            <a href="/logout"> حسابي </a>
          </li>

          <li className="breadcrumb-item">
            <a href="/"> الصفحة الرئيسيّة </a>
          </li>
        </ol>
      </div>

      <div className="logout-page  d-flex justify-content-center ">
        <div className="logout_information   col-sm-6 row justify-content-center">
          <div
            className="memperShip border border-black "
            style={{ width: "87%", padding: "0px", height: "300px" }}
          >
            <img
              style={{ width: "100%", height: "75%" }}
              src="https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw00190bc0/images/adidas/catalog/Dotcom_BBall_MA_812x480px_tcm143-509729.jpg"
              alt=""
            />
            <div className="d-flex m-2 ">
              <a href="" className="col-10">
                {" "}
                استعراض
              </a>
              <p className="col-2"> العضوية</p>
            </div>
          </div>
          <div
            className="menu_proudact  p-0 border border-black text-end mt-2 "
            style={{ width: "87%" }}
          >
            <div className="textProudact ">
              <h5 className="m-2">لائحة المنتجات التي أتمناها</h5>
            </div>

            <div className="menue_prd  p-2 border bprder-black">
              {!value ? <p> القائمة فارغة</p> : ""}

            </div>
          </div>

          <div className=" mt-5 d-flex justify-content-end">
            <button
              onClick={onlougOut}
              className="logout_buttne position-relative  "
            >
              <span className="  mx-3">تسجيل الخروج</span>

              <img
                className=" arrow-login position-absolute "
                src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-black.svg"
              ></img>
            </button>
          </div>
        </div>

        <div className="information_acount  col-sm-6 row justify-content-center">
          <div
            className="personal-info  border border-black text-end  p-0"
            style={{ width: "87%", height: "420px" }}
          >
            <div>
              <h6 className="p-2">معلومات شخصية</h6>
              <p className="p-2">
                لا تتردد في تعديل أي من تفاصيلك أدناه حتى تقوم بتحديث حسابك.
              </p>
            </div>
            <div className="border-top border-black w-100 p-2">
              <div className="d-flex">
                <a className="col-10 text-start " href="#">
                  عدل
                </a>
                <h6 className="col-2">نفاصيل </h6>
              </div>
              <div className="detiels">
                <p> {user}</p>
                <p>BirthDay</p>
                <p>{email}</p>
                <p>{phone} </p>
              </div>
              <div className="d-flex mt-5">
                <a className="col-9 text-start " href="#">
                  عدل
                </a>
                <h6 className="col-3">إعدادات البيانات</h6>
              </div>
            </div>
          </div>

          <div
            className="favorites border border-black text-end mt-5  p-0"
            style={{ width: "87%", height: "60px" }}
          >
            <div className="d-flex">
              <a className="col-10 text-start " href="#">
                {" "}
                عدل
              </a>
              <h6 className="col-2">تفضيلات </h6>
            </div>
          </div>
          <div
            className="menu_proudact  p-0 border border-black text-end mt-5 mb-4"
            style={{ width: "87%" }}
          >
            <div className="textProudact ">
              <h5 className="m-2"> دفتر العناوين</h5>
            </div>

            <div className="menue_prd  p-2 border bprder-black text-center">
              <a> اضف جديد</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
