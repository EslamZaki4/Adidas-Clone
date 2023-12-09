import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GETallProducts } from "../../Store/Slices/allProducts";
import { CartViewItem } from '../../Components/CartViewItem/CartViewItem'
import { EmptyCart } from "../../components/EmptyCart/EmptyCart";
import "./Cart.css";
import { addToCart, getFromCart, removeFromCart } from "../../Store/Slices/cartSlice";
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
export default function Cart() {

  const [totalPrisce, setTotalPrice] = useState(0);
  const [itemToRemove, setItemToRemove] = useState(null);
  const cart = useSelector((state) => state.cart.cart) || [];
  const [cartPrd, setCartPrd] = useState([])
  const dispatch = useDispatch();
  const effRanCart = useRef(false)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

 const navigate =useNavigate()


  let allProducts = useSelector((state) => state.allProducts.allProducts)
  let alternative = useSelector((state) => state.allProducts.alternative)

  const effRanPrd = useRef(false);

  const handleRemoveItem = (id, size ,name) => {
  
    setItemToRemove({ id, size , name});
    setShowConfirmationModal(true);
  };

  
const handleUpdateQty = (id, size, qty) => {


    dispatch(addToCart({
      id: id,
      size: size,
      qty: qty
    }
    ))




  }

  //get all prd
  useEffect(() => {
    if (effRanPrd.current || allProducts.length) return;
    dispatch(GETallProducts());
    return () => effRanPrd.current = true;
  }, []);


  //get cart data
  useEffect(() => {
    if (effRanCart.current) return;

    if (cart.length == 0) {
      dispatch(getFromCart())
    }

    return () => effRanCart.current = true;
  }, [cart])


  useEffect(() => {
    if (cart.length) {


      const newArr = [];
      let total = 0;
      cart.map((item) => {

        var _prd = allProducts.find(prd => prd.id == item.id) || alternative.find(prd => prd.id == item.id)
        if (!_prd) return;//not exist storeDB
        total += _prd.price * item.qty

        newArr.push({
          ..._prd,
          size: item.size,
          qty: item.qty
        })
      })
      setCartPrd(newArr)
      setTotalPrice(total)

    }

  }, [cart])




  return (
    <>
     <Modal className="modal-parent" show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="remove-title">REMOVE PRODUCT? </Modal.Title>
        </Modal.Header>
        <Modal.Body className="confirm-remove" >
          <p>هل أنت متأكد من إزالة المنتج التالي من العربة؟</p>
        <div style={{fontWeight:700}}>{itemToRemove?.name}</div>
        </Modal.Body>
        <Modal.Footer>
        <a
            href="#"
            style={{marginRight:20}}
            onClick={() => setShowConfirmationModal(false)}
          >
            إلغاء
          </a>



          <div
          className="btn-toHome"
          onClick={() => {
            dispatch(removeFromCart({ id: itemToRemove.id, size: itemToRemove.size }));
            setShowConfirmationModal(false);
            setItemToRemove(null);
             }}
          >
           
            <button className="btn-adidas-dark yes-btn">

              <span>Yes</span>
                          
              <i className="arrow-front"></i>
               <i className="arrow-back"></i>
            </button>
          </div>





         
        </Modal.Footer>
      </Modal>
      {cart.length == 0 || allProducts.length == 0 ? <EmptyCart />
        :
        <>
          <div className="padge  row justify-content-end text-end ">
            <h1 className="col-4 m-2 ">
              حقيبتك
              <span className="col-2 prd-unreserve ">({cart.length} منتجات محجوزة)</span>
            </h1>
          </div>
          <div className="cartProudact d-flex">
            <div
              className="orders-summery mt-4 col-4 row justify-content-end"
              style={{ height: "200px" }}
            >
              <div
                className="ordes-information border boredr-black text-end p-2"
                style={{ width: "90%" }}
              >
                <h4>ملخص الطلب </h4>

                <div className="row ">
                  <p className="col-9 text-start">Egp {totalPrisce}</p>
                  <p className="col-2">المجموع</p>

                  <p className="col-9 text-start"> مجاناً</p>
                  <p className="col-2">التوصيل</p>

                  <p className="col-11 p-0" style={{ fontWeight: 700 }}>
                    ! لقد حصلت على خدمة شحن مجانية
                  </p>

                  <p className="col-9 text-start" style={{ fontWeight: 700 }}>

                    Egp {totalPrisce}
                  </p>
                  <p className="col-2" style={{ fontWeight: 700 }}>
                    المجموع
                  </p>
                </div>
              </div>
              <div onClick={() => navigate('/payment')}>
              <div className=" mt-5  row justify-content-end">
                <button
                  type="submit"
                  className="cart-Show position-relative "
                  style={{
                    width: "90%",
                    height: "50px",
                  }}
                >
                  <span className="  mx-3">عملية الدفع </span>
                  <img
                    className=" arrow-black position-absolute "
                    src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-black.svg"
                  />
                  <img
                    className=" arrow-white position-absolute "
                    src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-white.svg"
                  />
                </button>
              </div>
              </div>

              <div className="offe mt-5  row justify-content-end text-end">
                <label>أدخل رمز العرض</label>

                <input
                  className="mt-3"
                  style={{
                    width: "90%",
                    height: "50px",
                  }}
                />
              </div>
              <div className=" mt-5  row justify-content-end">
                <button
                  type="submit"
                  className="cart-Send position-relative "
                  style={{
                    width: "90%",
                    height: "50px",
                  }}
                >
                  <span className="  mx-3">ارسال</span>
                  <img
                    className=" arrow-black position-absolute "
                    src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-black.svg"
                  />
                </button>
              </div>
            </div>

            <div className="orders-detaiels col-8 mt-4 row justify-content-end ">


              {cartPrd.map((prd) => <CartViewItem 
              handleUpdateQty={handleUpdateQty} 
              handleRemoveItem = {handleRemoveItem}
              prd={prd} key={uuidv4()} />
                
              )}




            </div>


          </div>
        </>
      }
    </>
  );
}
