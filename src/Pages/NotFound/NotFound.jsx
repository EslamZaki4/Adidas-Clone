import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

  const Navigate =useNavigate();
  return (
    <div className="col-12 cart-empty container mt-5">
          <div className="empty_cart_adidas wishlist-no-required">
            <h1>عذراً</h1>
            <h6 className='mt-4'>
            لا يبدو أننا نجد الصفحة التي تبحث عنها
            </h6>
          </div>
          <div
          className="btn-toHome"
            onClick={() => {
              Navigate("/Home");
            }}
          >
           
            <button className="btn-adidas-dark">

              <span >استمر في التسوّق</span>
                          
              <i className="arrow-front"></i>
               <i className="arrow-back"></i>
            </button>
          </div>
          <div className="help-info no-hone-number-adidas-wishlist"></div>
          <div className="empty-wisthlist-div-adidas-sample"></div>
        </div>
    );
}
  

