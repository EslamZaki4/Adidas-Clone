import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WishlistEmpty from "../../Components/WishListEmpty/WishListEmpty";
import { GETallProducts } from "../../Store/Slices/allProducts";
import { addToWishList } from "../../Store/Slices/wishlistSlice";
import "../../components/ProductCard/ProductCard";
import WishlistAlert from "../../components/WishListAlert/WishListAlert";
import { heartIconPath } from "../../config/config";
import "./Wishlist.css";


/////////////////////////////////////////////////////////////////////
export default function WishList() {
  const favorites = useSelector((state) => state.favorites.favorites);

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [ximg, setXimg] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EGP",
  });

  const findPrdById = (id) => {
    console.log(id);
    const prd = allProducts.find(prd => prd.id == id);
    return prd;
  }

  useEffect(() => {


    const isNameInLocalStorage = localStorage.getItem('email');
    const wishlistGridLogin = document.querySelector('.wishlist-grid-login');

    if (wishlistGridLogin) {
      if (isNameInLocalStorage) {
        wishlistGridLogin.classList.add('d-none');
      }
    }

    if (!allProducts.length) {
      dispatch(GETallProducts())

    }



  }, []);


  const allProducts = useSelector((state) => state.allProducts.allProducts)






  const handleRemove = (prdId) => {
    dispatch(addToWishList(prdId));
    setShowAlert(true);
  };

  const closeAlert = () => {

    setShowAlert(false);

  };

  return (
    <>
      {showAlert && (
        <WishlistAlert
          message={"لقد تم حذف المنتج من لائحة المنتجات التي تتمناها."}
          onClose={closeAlert} />
      )}
      {favorites.length === 0 ? (
        <WishlistEmpty />
      ) : (
        <>

          <div className="wishlist-start m-5">
            <div className="wishlist-second">
              <h1 className="wishlist-title">
                قائمة الرغبات
                <span className="wishlist-count1 js-wishlist-count d-md-none">
                  ({favorites.length})
                </span>
              </h1>
              <div className="wishlist-count hidden-sm-down">
                <h3 className="js-wishlist-count">{favorites.length}</h3>منتجات
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-12    wishlist-grid-login">
                <div className="wishlist-login-section">
                  <h2>لا تفقد قائمة المنتجات التي تتمناها</h2>
                  <p>
                    قم بالتسجيل أو تسجيل الدخول لحفظ المنتج (المنتجات) حتى لا
                    تفقدها.
                  </p>
                  <div className="wishlist-Login-btn"
                    onClick={() => {
                      Navigate("/Login");
                    }}
                    >
                       
                    <button className="btn-adidas-dark">
                    <span>تسجيل الدخول / التسجيل</span>
                      <i className="arrow-front"></i>
                      <i className="arrow-back"></i>
                     
                    </button>
                  </div>
                </div>
              </div>

              {allProducts.length && favorites.map(id => (

                <div
                  className="col-md-3 col-sm-6 col-xs-6 px-4 py-2"
                  key={id}>

                  <div>
                    <div className="position-relative">
                      <img
                        className="Love"
                        style={{ width: 50, height: 20 }}
                        onClick={() => handleRemove(id)}
                        src={heartIconPath.filled}
                        title="wishlist"
                        alt="Heart Icon"
                      />

                      <div
                        className="prd-img1"
                        onClick={() => Navigate(`/details/${id}`)}
                      >
                        <img
                          src={ximg || findPrdById(id).imgurl[0]}
                          className="w-100"
                          alt={`Product ${id}`}
                        />
                      </div>

                      <div className="pct-discount text-end">
                        <span>-25%</span>
                      </div>
                    </div>

                    <figcaption className="prd-body">
                      <div className="prd-name">
                        <a href="">{findPrdById(id).name} </a>
                      </div>
                      <div className="prd-price">
                        <del className="prev-price">
                          <span content={findPrdById(id).oldprice}>
                            {currency.format(findPrdById(id).oldprice)}
                          </span>
                        </del>
                        <span className="curr-price" content={findPrdById(id).price}>
                          {currency.format(findPrdById(id).price)}
                        </span>
                      </div>
                    </figcaption>
                  </div>
                </div>



              ))}



            </div>
          </div>
        </>
      )}
    </>
  );
}
