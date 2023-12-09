import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CartItem from '../CartItem/CartItem';
import './CartMenu.css';

export default function CartMenu({ prd, setCartMenuActive, activeSize }) {

    const cart = useSelector((state) => state.cart.cart) || [];
    const allProducts = useSelector((state) => state.allProducts.allProducts);
    const alternative = useSelector((state) => state.allProducts.alternative);
    const isLoadingCart = useSelector((state) => state.cart.isLoading);

    const [totalPrice, setTotalPrice] = useState(0);
    const [cartPrd, setCartPrd] = useState([])
    const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EGP' });

const navigate  = useNavigate()

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

            <div className="shadow-container">
                <div className="cart-menu" dir='rtl'>

                    <div className="close-btn" onClick={() => setCartMenuActive(false)}>
                        <i className="fa-solid fa-xmark fs-4" />
                    </div>

                    <div className="cart-header">
                        <span className='h5 fw-bolder ms-2'>تمت اضافى المنتج الى حقيبة التسوق</span>
                        <span>{cart.length}</span>
                    </div>

                    <div className="cart-prd-list">
                        {

                            cartPrd.map(prd =>
                                <CartItem
                                key={uuidv4()}
                                    prd = {prd}

                                />)

                        }


                    </div>

                    <div className="cart-reciet">

                        <div className="cart-reciet-total d-flex justify-content-between">
                            <span>المجموع : </span>
                            <span>{totalPrice && currency.format(totalPrice)}</span>
                        </div>


                        <div className="cart-reciet-delivery d-flex justify-content-between">
                            <span>التوصيل : </span>
                            <span>مجاناً</span>
                        </div>

                        <label className='fw-bold my-3'>لقد حصلت على خدمة شحن مجانية!</label>
                        <div className="cart-total-price d-flex justify-content-between pt-2 fw-bold border-top border-dark">
                            <small><span>المجموع : </span></small>
                            <small><span>{totalPrice && currency.format(totalPrice)}</span></small>

                        </div>


                            <div onClick={() => navigate('/Cart')}>
                     
                        <button className='btn-adidas-dark w-100 mt-3' >
  
                            <span>استعراض الحقيبة</span>
                            <i className="arrow-back me-auto" />
                            <i className="arrow-front me-auto" />
                        </button>
                        </div>

                        <div onClick={() => navigate('/payment')}>
                        <button className='btn-adidas-light w-100 mt-3 border border-dark'>
                            <span style={{ "fontSize": "18px" }}>عملية الدفع</span>
                            <i className="arrow-back me-auto" />
                            <i className="arrow-front me-auto" />
                        </button>
                        </div>

                    </div>


                </div>
            </div>





        </>

    )
}
