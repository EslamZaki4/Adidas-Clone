import React, { useState } from 'react'


export const CartViewItem = ({ prd, handleUpdateQty , handleRemoveItem}) => {









  return (
    <>

      {prd &&

        <div
          className="ditales border border-black p-0 mt-5"
          style={{ width: "90%", height: "310px" }}>
          <div className="content row ">
            <div className="text-order col-8 ">
              <div className="row text-end pt-2 ">
                <div className="col-8 text-start">
                <i className="fa-solid fa-xmark m-2 ms-4" onClick={()=> handleRemoveItem(prd.id , prd.size ,prd.name)}/>
                  Egp{prd.qty * prd.price}

                </div>
                <p className="col-4" style={{ fontWeight: 700 }}>
                  {prd.name}
                </p>
                <p>Core Black / Core Black / Cloud White</p>
                <p>مقاس: {prd.size}</p>
                <p>Only 1 Left</p>
                <a> عدل</a>




                <select className='prd-qty ms-auto m-3'
                  dir='rtl'
                  style={{ width: "15%", height: "50px", border: "1px solid grey" }}
                  onChange={(e) => handleUpdateQty(prd.id, prd.size, e.target.value)}
                  defaultValue={prd.qty} >
               

                  {
                  Array(prd.availablestock[prd.availablesize.indexOf(prd.size)]).fill().map((_, i) =>
                      <option value={i + 1} key={i} >                              
                        {i + 1}
                      </option>
                    )}
                </select>





              </div>
            </div>
            <div className="im-order col-4 p-0">
              <img
                src={prd.imgurl[1]}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      }

    </>


  )
}
